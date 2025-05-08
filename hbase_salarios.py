import pandas as pd
import happybase

try:
    # Conexión a HBase
    connection = happybase.Connection('localhost')
    print("Conexión establecida con HBase")

    # Crear la tabla
    table_name = 'salarios'
    families = {
        'trabajo': dict(),
        'compensacion': dict(),
        'empresa': dict()
    }

    if table_name.encode() in connection.tables():
        print(f"Eliminando tabla existente: {table_name}")
        connection.delete_table(table_name, disable=True)

    connection.create_table(table_name, families)
    table = connection.table(table_name)
    print(f"Tabla '{table_name}' creada exitosamente")

    # Cargar los datos a hbase desde el dataset
    df = pd.read_csv('UNAD_dataScience_salarios_2024.csv')

    for idx, row in df.iterrows():
        row_key = f'row_{idx}'.encode()
        data = {
            b'trabajo:ano_trabajo': str(row['ano_trabajo']).encode('utf-8'),
            b'trabajo:nivel_experiencia': str(row['nivel_experiencia']).encode('utf-8'),
            b'trabajo:tipo_contrato': str(row['tipo_contrato']).encode('utf-8'),
            b'trabajo:titulo_trabajo': str(row['titulo_trabajo']).encode('utf-8'),

            b'compensacion:salario_usd': str(row['salario_usd']).encode('utf-8'),

            b'empresa:porcentaje_remoto': str(row['porcentaje_remoto']).encode('utf-8'),
            b'empresa:tamano_empresa': str(row['tamano_empresa']).encode('utf-8')
        }
        table.put(row_key, data)

    print("Datos cargados exitosamente en HBase")

    # Mostrar los primeros 3 registros
    print("\n Consulta de de recorrido y selección de los datos")
    print("\n=== Primeros 3 registros ===")
    for i, (key, data) in enumerate(table.scan()):
        if i >= 3:
            break
        print(f"\nID: {key.decode()}")
        for column in data:
            print(f"{column.decode()}: {data[column].decode()}")

    # Salario promedio por nivel de experiencia
    print("\n Consultas de filtrado y agrupamiento de los datos:")
    print("\n=== Salario promedio por nivel de experiencia ===")
    salario_total = {}
    conteo = {}

    for key, data in table.scan():
        nivel = data[b'trabajo:nivel_experiencia'].decode()
        salario = float(data[b'compensacion:salario_usd'].decode())

        salario_total[nivel] = salario_total.get(nivel, 0) + salario
        conteo[nivel] = conteo.get(nivel, 0) + 1

    for nivel in salario_total:
        promedio = salario_total[nivel] / conteo[nivel]
        print(f"{nivel}: ${promedio:.2f}")

    # Número de trabajos con 100% remoto
    print("\n=== Número de empleos con trabajo 100% remoto ===")
    total_remoto = 0
    for key, data in table.scan():
        if int(data[b'empresa:porcentaje_remoto'].decode()) == 100:
            total_remoto += 1
    print(f"Total de empleos remotos 100%: {total_remoto}")
    
    # Consulta para insertar un dato nuevo
    print("\n Consulta de inserción, modificación y eliminacion de datos:")
    print("\n=== Inserción de un nuevo registro ===")
    nuevo_id = b'nuevo_registro'
    nuevo_dato = {
        b'trabajo:ano_trabajo': b'2080',
        b'trabajo:nivel_experiencia': b'Experto',
        b'trabajo:tipo_contrato': b'Tiempo completo',
        b'trabajo:titulo_trabajo': b'Magic Data Scientist',
        b'compensacion:salario_usd': b'95000',
        b'empresa:porcentaje_remoto': b'100',
        b'empresa:tamano_empresa': b'L'
    }
    table.put(nuevo_id, nuevo_dato)
    print(f"Registro {nuevo_id.decode()} insertado exitosamente.")

    # Verificar inserción
    print("Verificación:")
    dato = table.row(nuevo_id)
    for columna, valor in dato.items():
        print(f"{columna.decode()}: {valor.decode()}")

    # Consulta para actualizar el salario
    print("\n=== Actualización del salario ===")
    actualizacion = {
        b'compensacion:salario_usd': b'98000'
    }
    table.put(nuevo_id, actualizacion)
    print(f"Salario actualizado exitosamente para {nuevo_id.decode()}.")

    # Verificación de actualización
    print("Verificación de actualización:")
    dato = table.row(nuevo_id)
    print(f"Nuevo salario_usd: {dato[b'compensacion:salario_usd'].decode()}")
    
    print("\n=== Eliminación del registro ===")
    table.delete(nuevo_id)
    print(f"Registro {nuevo_id.decode()} eliminado exitosamente.")

    # Verificación de eliminación
    verificar = table.row(nuevo_id)
    if not verificar:
        print("Confirmación: El registro fue eliminado correctamente.")
    else:
        print("Error: El registro aún existe.")
        
except Exception as e:
    print(f"Error: {str(e)}")
finally:
    connection.close()
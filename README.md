# Endpoints
- Obtener token(get): http://localhost:5001/api/profiles/get-token/:profileId
- Obtener perfiles(get): http://localhost:5001/api/profiles/get-profiles
- Obtener un perfil(get): http://localhost:5001/api/profiles/get-profile/:profileId
- Crear perfil(post): http://localhost:5000/api/profiles/create-profile
- Actualizar perfil(put): http://localhost:5000/api/profiles/update-profile/:profileId
- Eliminar perfil(delete): http://localhost:5000/api/profiles/delete-profile/:profileId

# JSON para crear y actualizar perfil
{
    "name": "string",
    "lastName": "string",
    "cellphone": "string",
    "email": "string",
    "password": "string",
    "address": "string"
}

# Notas
- Al crear el primer usuario no se necesita token, lo desarrolle para que funcione de esa forma
- No pude agregar Kubernetes
- Para todos los endpoints (menos el de obtener el token) hay que agregar el token como un Bearer Token
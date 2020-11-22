<template>
    <div class="container">
        <form>
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre">
            </div>
            <div class="form-group">
                <label for="telefono">Telefono</label>
                <input type="text" name="telefono" id="telefono">
            </div>
            <div class="form-group">
                <label for="email">Correo</label>
               <input type="email" 
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com">
            </div>
            <div class="form-group">
                <label for="direccion">Dirección</label>
                <input type="text" name="direccion" id="direccion">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Proveedores",
    data(){
        return {

        }
    }
}
</script>
<template>
            <div class="col-md-9">
                <div class="row " >
                     <a href="/create-producto" class="btn btn-primary">New</a>
                </div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">precio</th>
                            <th scope="col">Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="imagen in imagenes" :key="imagen.id">
                            <td>{{imagen.codigo}}</td>
                            <td>{{imagen.nombre}}</td>
                            <td>{{imagen.descripcion}}</td>
                            <td>{{imagen.precio}}</td>
                            <td>{{imagen.categoria}}</td>

                        </tr>
                    </tbody>
                </table>
                <div class="row ">
                    <div class="col-md-12 pagine">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    name: "Productos",
    async created(){
      try {
        await this.$store.dispatch("getImagen") 
      }catch(error){
        console.error(error)
      }
      
    },
    computed: {
      imagenes(){
        return this.$store.state.imagenes;
      }
    }
}

</script>

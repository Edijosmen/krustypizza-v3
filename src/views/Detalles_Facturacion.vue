<template>
<div>
    <Navbaru/>
    <div class="container print">
        <!--LOGO-->
        <div class="row logovv">
                <div class="col-4">
                    <div class="container logovv">
                        <div class="logo ">
                            <img class="img-fluid img-thumbnail" src="../assets/img/krostyanuncio.jpg">
                        </div>
                    </div>
                </div>
                <div class="col-md-8 ">
                    <div class="container logovv">
                        <div class="text-left mt-5 titulogo">
                                <h1 class="align-center">Pizzería Krusty</h1>  
                        </div>
                    </div>
                </div>     
        </div>
        <!--NAVBAR-->
        <div class="row">
             <div class="col">
               
                   <div class="container">       
                        <nav class="border border-dark navbar navbar-light navbar-expand-sm" style="background-color: #f4f9fc;">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <div class="navbar-nav mx-auto text-center">
                            <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true">Pizzas</a>
                            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Bebidas</a>
                            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Postres</a>
                            </div>
                            </div>
                        </nav>
                    </div>   
            </div>
        </div>   
        <!--COLUMNA FORMULARIO DE FACTURACIÓN-->
        <div class="row detalles">
            <div class="col-xl-6">
                <div class="container facturacion">
                                <!--FORMULARIO KPVTO-->    
                                <form class="text-left">
                                    <p class="font-weight-bold">DETALLES DE FACTURACIÓN</p>
                                    <div class="form-row">
                                        <div class="form-group col-xl-6">
                                            <label for="inputEmail4">Nombres</label>
                                            <input type="nombres" class="form-control" id="inputNombres4" placeholder="Nombres">
                                        </div>
                                        <div class="form-group col">
                                            <label for="inputPassword4">Apellidos</label>
                                            <input type="apellidos" class="form-control" id="inputApellidos4" placeholder="Apellidos">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-xl-6">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                                        </div>
                                        <div class="form-group col-xl-6">
                                        <label for="inputPassword4">Teléfono</label>
                                        <input type="telefono" class="form-control" id="inputTelefono4" placeholder="Teléfono">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-xl-12">
                                            <label for="inputAddress2">Dirección</label>
                                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-group col-xl-12">
                                        <label for="inputCity">Ciudad</label>
                                        <select id="inputCity" class="form-control">
                                            <option selected>Seleccionar...</option>
                                            <option>...</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck">
                                        <label class="form-check-label" for="gridCheck">
                                            Acepto la Política de Tratamiento de Datos*
                                        </label>
                                        </div>
                                    </div>
                                    <!--<button type="submit" class="btn btn-primary">Realizar Pedido</button>-->
                                </form>
                </div> 
                

            </div>
            <!--COLUMNA DETALLE DE PEDIDOS-->
           <div class="col-xl-6"> 
                <div class="container facturacion">
                   
                     <div class="card text-center">
                            <div class="card-header bgamar font-weight-bold">
                                TU PEDIDO
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6">
                                       <span class="producto">PRODUCTO</span>     
                                    </div>
                                    <div class="col-md-6">
                                       <span class="producto text-align:right">SUBTOTAL</span>     
                                    </div>

                                </div>
                                 <div class="row">
                                    <div class="col-md-6 mt-4">
                                       <span class="producto">TOTAL</span>     
                                    </div>

                                </div>
                                <div class="row">
                                    <div class="col mt-5">
                                       <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="gridCheck">
                                            <label class="form-check-label" for="gridCheck">
                                                Pago en efectivo
                                            </label>
                                        </div>    
                                    </div>
                                </div>
                                  <div class="row">
                                    <div class="col">
                                       <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="gridCheck">
                                            <label class="form-check-label" for="gridCheck">
                                                He leído y estoy de acuerdo con los Términos y Condiciones
                                            </label>
                                        </div>    
                                    </div>
                                </div>
                                <!-- <h5 class="card-title">Special title treatment</h5>
                               <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>-->
                                <a href="#" class="btn btn-warning mt-4">Realizar Pedido</a>
                            </div>
                           
                    </div>
                </div> 
                

            </div>
                    
        </div>
       
    </div>
    <div>
         <Foother/>
   </div>
</div>

</template>

<script>
    import Navbaru from '@/components/Navbaru.vue'
    import Foother from '@/components/Foother.vue'
    export default {
    name: 'Footer',
    components: {
        Foother,
        Navbaru
     }
    }
</script>

<style scoped>
    
    .container{
        padding-top: 10px;
        background: #f2f2f2;
        background-repeat: no-repeat;
        background-size: cover;
        
    }
    .logovv{
        background:#a00101;
    }
    .bgamar{
         background:#a00101;
        color:white;
  }
    
  /*  .print{
        background-image: url("../assets/img/formulario.jpg");
    }
     .facturacion{
        margin-top: 150px;
       
    }
*/
  .logo{
      width: 150px;
  }
  .titulogo{
        color: white;
  }
   
</style>
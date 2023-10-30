$(document).ready(function () {
   var txtResultado = $('#idCalculadoratxtResultado');
   var expresion = '';

   $('.idCalculadoratcl').on('click', function () {
      var valorBoton = $(this).val();
      var valorActual = txtResultado.val();

      if (valorActual === '0') {
         txtResultado.val(valorBoton);
      } else {
         txtResultado.val(valorActual + valorBoton);
      }
   });

   $('.idCalculadoratcl.btn-warning').on('click', function () {
      expresion = txtResultado.val();
      try {
         var resultado = eval(expresion);
         txtResultado.val(resultado);
      } catch (error) {
         txtResultado.val('Error');
      }
   });
   

   $('#idCalculadoraBorrar').on('click', function () {
      txtResultado.val('0');
      expresion = '';
   });

   // Función para calcular la expresión matemática de manera segura
   function calcularExpresion(expresion) {
      return Function('"use strict";return (' + expresion + ')')();
   }
});
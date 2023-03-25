
// function tampilDoa(){
//     $.getJSON('data/doaharian.json',function(data){
//         data.forEach(e => {
            
//             $('#tampilDoa').append(`
//             <div
//             class="col-md-6 mb-2"
//             id="btnDoa"
//             data-bs-toggle="modal"
//             data-bs-target="#exampleModal"
//             data-id="${e.id}"
//           >
//             <div class="bg-success shadow card rounded px-2 pt-2 btn">
//               <p class="text-white card-title fw-semibold">${e.doa}</p>
//             </div>
//           </div>
            
//             `)
//         });
//     })
// }
// tampilDoa();
// $('#tampilDoa').on('click','#btnDoa',function(){
//     // console.log($(this).data('id'))
    
//     $.getJSON('data/doaharian.json',function(data){
//         data.forEach(e => {
//             console.log(e.id)
//             if (e.id === $(this).data('id')){
//             $('.modal-body').html(`
            
//             <h4>${e.ayat}</h4>
//                 <p class="fw-semibold">${e.latin}</p>
//                 <p><em>"${e.artinya}"</em></p>

//             `)}
//         })})


// })

// $.ajax({
  //   url : 'data/doaharian.json',
  //   type : 'GET',
  //   dataType : 'json',
  //   data:({
    //   }),
    //   success : function(data){
//     $('#tampilan').html(`
    
//     `)
//   }
// })
$.getJSON('data/doaharian.json',function(e){
  e.forEach(e => {
    $('#tampilkan').append(`
    
    <div class="accordion-item ">
              <h2 class="accordion-header ">
                <button
                  class="accordion-button collapsed border bg-success text-white rounded  "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapse${e['id']}"
                  aria-expanded="false"
                  aria-controls="flush-collapse${e['id']}"
                >
                  ${e['doa']}
                </button>
              </h2>
              <div
                id="flush-collapse${e['id']}"
                class="accordion-collapse collapse"
                data-bs-parent="#tampilkan"
              >
                <div class="accordion-body border border-top-0 rounded-bottom text-center">
                  <P class="display-6 fw-semibold" id="arabic" > ${e['ayat']}</p>
                  <P class="bloquote-footer">${e['latin']}</p>
                <P class="">Artinya :<em>${e['artinya']}</em></p>
                </div>
              </div>
            </div>
 
    `)
  });
})
// class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"

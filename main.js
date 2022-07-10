$('.nav-link').on('click', function () {
  $('.nav-link').removeClass('active');
  $(this).addClass('active');
});

$('#divisi1').on('click', function () {
  $.getJSON('data.json', function (data) {
    let divisi = data.divisi;
    let content = '';
    let id = divisi[0];
    $.each(divisi, function (i, data) {
      $('.modal-body').append(
        `<div class="container">
      <div class="row mb-3">
        <div class="col-md-4">
          <img src="img/SIC crl cop1.png" alt="" width="100px" />
        </div>
        <div class="col-md-8">
          <div class="card" style="width: 18rem;">
            <div class="card-header text-center">
             <b> ` +
          data.nama +
          `</b>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">` +
          data.ketua +
          `</li>
              <li class="list-group-item">` +
          data.deskripsi +
          `</li>
              <li class="list-group-item">2022</li>
            </ul>
          </div>
        </div>
      </div>
    </div>`
      );
    });
  });
});

function videoModal(link) {

    let v = new URL(link).searchParams.get('v');

    $(`<div class="modal fade" id="myModal" role="dialog"> 
     <div class="modal-dialog video_modal modal-xl modal-dialog-centered"> 
       <!-- Modal content--> 
        <div class="modal-content"> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            <iframe width="100%" height="450px" src="https://www.youtube.com/embed/${v}" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
       </div> 
    </div> 
  </div>`).appendTo('body');

    //Trigger the modal
    $("#myModal").modal({});

    //Remove the modal once it is closed.
    $("#myModal").on('hidden.bs.modal', function () {
        $("#myModal").remove();
    });
}
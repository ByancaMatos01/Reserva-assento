$('.poltronas div').click(function (e) { 
    sit = $(this).attr('class');
    if(sit != 'ocupado'){
        //caso esteja vazio
        resp = confirm('Deseja reservar o assento?');
        if(resp==true){
            nome = prompt("Digite o nome:");
            if(nome != null && nome.length >3){
                p = $(this).children();
                $(p[1]).html(nome);
                $(this).removeClass('vazio');
                $(this).addClass('ocupado');
            }
        }
    }else{
        //caso esteja ocupado
        resp = confirm('Deseja cancelar a reserva?');
        if(resp == true){
            $(this).removeClass('ocupado');
            $(this).addClass('vazio');
            p = $(this).children();
            $(p[1]).html("");
        }
        
    }
    
    
    
});









/*

$('.poltronas div').click(function (e) { 
    e.preventDefault();
    sit = $(this).attr('class');
    if(sit != 'ocupado'){
        resp = confirm("Deseja reservar o assento?");
        if(resp == true){
            nome = prompt('Digite seu nome:');
            p = $(this).children();
            if(nome != null && nome.length > 3){
                $(p[1]).html(nome);
                $(this).removeClass('vazio');
                $(this).addClass('ocupado');
            }
        }
        
    }else{
        resp = confirm("Deseja cancelar a reserva?");
        if(resp == true){
            p = $(this).children();
            $(p[1]).html("");
            $(this).removeClass('ocupado');
            $(this).addClass('vazio');
        }
        
    }

    
});
*/
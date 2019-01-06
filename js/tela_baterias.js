$(document).ready(function(){
    $("#escolha_bateria,#escolha_dia").change(function(){
        for(i=0;i<=9;i++){
            if($("#escolha_bateria").val() == ("bateria"+(i+1))){
                $("#bateria").text("Bateria: "+baterias[i].battery_name);
                
                for(c=0;c<=30;c++){
                    if($("#escolha_dia").val() == (c+1)){
                       switch(i){
                            case 0: 
                               $("#data_hora").text("Data/Hora: "+bateria1[c].timestamp_upload);
                               $("#temp_valor").text(bateria1[c].temperature);
                               $("#carga_valor").text(bateria1[c].charge);
                            break;
                            case 1: 
                               $("#data_hora").text("Data/Hora: "+bateria2[c].timestamp_upload);
                               $("#temp_valor").text(bateria2[c].temperature);
                               $("#carga_valor").text(bateria2[c].charge);
                            break;
                            case 2: 
                               $("#data_hora").text("Data/Hora: "+bateria3[c].timestamp_upload);
                               $("#temp_valor").text(bateria3[c].temperature);
                               $("#carga_valor").text(bateria3[c].charge);
                            break;
                            case 3: 
                               $("#data_hora").text("Data/Hora: "+bateria4[c].timestamp_upload);
                               $("#temp_valor").text(bateria4[c].temperature);
                               $("#carga_valor").text(bateria4[c].charge);
                            break;
                            case 4: 
                               $("#data_hora").text("Data/Hora: "+bateria5[c].timestamp_upload); 
                               $("#temp_valor").text(bateria5[c].temperature);
                               $("#carga_valor").text(bateria5[c].charge);
                            break;
                            case 5: 
                               $("#data_hora").text("Data/Hora: "+bateria6[c].timestamp_upload);
                               $("#temp_valor").text(bateria6[c].temperature);
                               $("#carga_valor").text(bateria6[c].charge);
                            break;
                            case 6: 
                               $("#data_hora").text("Data/Hora: "+bateria7[c].timestamp_upload); 
                               $("#temp_valor").text(bateria7[c].temperature);
                               $("#carga_valor").text(bateria7[c].charge);
                            break;
                            case 7: 
                               $("#data_hora").text("Data/Hora: "+bateria8[c].timestamp_upload); 
                               $("#temp_valor").text(bateria8[c].temperature);
                               $("#carga_valor").text(bateria8[c].charge);
                            break;
                            case 8: 
                               $("#data_hora").text("Data/Hora: "+bateria9[c].timestamp_upload); 
                               $("#temp_valor").text(bateria9[c].temperature);
                               $("#carga_valor").text(bateria9[c].charge);
                            break;
                            case 9: 
                               $("#data_hora").text("Data/Hora: "+bateria10[c].timestamp_upload);
                               $("#temp_valor").text(bateria10[c].temperature);
                               $("#carga_valor").text(+bateria110[c].charge);
                        } 
                    }    
                }
                
                if($("#temp_valor").text() <= 3){
                    $("#temp_cor").text("Normal");
                    $("#temp_cor").css("background-color","limegreen")
                }
                else if($("#temp_valor").text() <= 6){
                    $("#temp_cor").text("Atenção");
                    $("#temp_cor").css("background-color","yellow")
                }
                else{
                    $("#temp_cor").text("Quente");
                    $("#temp_cor").css("background-color","red")
                }
                
                if($("#carga_valor").text() <= 2){
                    $("#carga_cor").text("Bateria Fraca");
                    $("#carga_cor").css("background-color","red")
                }
                else if($("#carga_valor").text() <= 5){
                    $("#carga_cor").text("Bateria Descarregando");
                    $("#carga_cor").css("background-color","yellow")
                }
                else{
                    $("#carga_cor").text("Bateria Carregada");
                    $("#carga_cor").css("background-color","limegreen")
                }
                break;
            }
        }
    })
    
    
})
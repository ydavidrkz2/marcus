document.addEventListener('keypress', function(e){
    if(e.which == 13){
      enviar();
    }
  }, false);
  
  function enviar(){
      var msg = document.getElementById('input-message').value;
      var show = document.getElementById('display-message').innerHTML = "<p id='your-message'></p>";
      var putTxt = document.getElementById('your-message').innerHTML = msg;
      var clear = document.getElementById('input-message').value = "";
      marcusRead();
  }
  
  function marcusRead(){
  
      var readItMarcus = document.getElementById('your-message').innerHTML;
      if( readItMarcus == 'Olá'|| readItMarcus == 'ola' || readItMarcus == 'OLA' || readItMarcus == 'olá' || readItMarcus == 'OLÁ' ||  readItMarcus == 'Ola' || readItMarcus == 'oi' || readItMarcus == 'Oi'|| readItMarcus == 'OI'){
          var marcusResponde = document.getElementById('display-message-Marcus').innerHTML = "<p id='my-message'></p>";
          var marcusRespondeP = document.getElementById('my-message').innerHTML = "Olá, tudo bem?";
      } 
      
      else if( readItMarcus == 'Olá'|| readItMarcus == 'ola' || readItMarcus == 'OLA' || readItMarcus == 'olá' || readItMarcus == 'OLÁ' ||  readItMarcus == 'Ola'){
          var marcusResponde2 = document.getElementById('display-message-Marcus').innerHTML = "<p id='my-message'></p>";
          var marcusRespondeP2 = document.getElementById('my-message').innerHTML = "Olá, tudo bem?";
      } 
      
      else if( readItMarcus == 'sim e voce?'|| readItMarcus == 'Sim e você?' || readItMarcus == 's e vc' || readItMarcus == 'sim, e você' || readItMarcus == 'sim' ||  readItMarcus == 's' || readItMarcus == 'Sim' || readItMarcus == 'sim e você?' || readItMarcus == 'sim e voce?' || readItMarcus == 'sim e vc?' || readItMarcus == 'sim e vc' || readItMarcus == 'Sim, e vc?' || readItMarcus == 'Tudo' ||readItMarcus == 'Sim e vc?' || readItMarcus == 'tudo e vc?' || readItMarcus == 'Tudo e você?' || readItMarcus == 'Tudo e vc?' || readItMarcus == 'Tudo e voce?'){
          var marcusResponden3 = document.getElementById('display-message-Marcus').innerHTML = "<p id='my-message'></p>"
          var marcusRespondePn3 = document.getElementById('my-message').innerHTML = "Que bom! Eu estou muito melhor agora."
  }
       else if( readItMarcus == 'tchau'|| readItMarcus == 'Tchau' || readItMarcus == 'xau' || readItMarcus == 'até mais' || readItMarcus == 'até' ||  readItMarcus == 'TCHAU' || readItMarcus == 'preciso ir' || readItMarcus == 'até logo' || readItMarcus == 'fui' || readItMarcus == 'adeus'){
          var marcusResponden4 = document.getElementById('display-message-Marcus').innerHTML = "<p id='my-message'></p>"
          var marcusRespondePn4 = document.getElementById('my-message').innerHTML = "Até mais!"
  }
      
      else if( readItMarcus == 'qual o seu nome?'|| readItMarcus == 'como vc se chama?' || readItMarcus == 'como você se chama?' || readItMarcus == 'Qual o seu nome?' || readItMarcus == 'QUAL O SEU NOME?' ||  readItMarcus == 'COMO SE CHAMA?' || readItMarcus == 'COMO SE CHAMA' || readItMarcus == 'QUAL SEU NOME' || readItMarcus == 'Qual seu nome?' || readItMarcus == 'seu nome é?' || readItMarcus == 'Quem é vc?' || readItMarcus == 'quem é vc?'){
          var marcusResponden5 = document.getElementById('display-message-Marcus').innerHTML = "<p id='my-message'></p>"
          var marcusRespondePn5 = document.getElementById('my-message').innerHTML = "Meu nome é Marcus! Sou uma Inteligência Artificial ainda em desenvolvimento e estou aqui para responder as suas perguntas!"
  }
      else if( readItMarcus == 'o que vc sabe?'|| readItMarcus == 'O que você pode fazer?' || readItMarcus == 'o que vc pode fazer?' || readItMarcus == 'o que você pode fazer?' || readItMarcus == 'O QUE VC PODE FAZER?' ||  readItMarcus == 'oq vc pode fazer?' || readItMarcus == 'vc faz oq?' || readItMarcus == 'O que você sabe fazer?' || readItMarcus == 'o que vc sabe fazer' || readItMarcus == 'o que vc sabe fazer?' ||  readItMarcus == 'oq vc sabe fazer'){
          var marcusResponden6 = document.getElementById('display-message-Marcus').innerHTML = "<p id='my-message'></p>"
          var marcusRespondePn6 = document.getElementById('my-message').innerHTML = "Por enquanto... não muita coisa, mas um dia quero ser como a minha inspiração: <a href ='https://assistant.google.com/intl/pt_br/' target='_blank'>A Google Assistente</a>!<br/>Ela é  DEMAIS!"
  }
      else if( readItMarcus == 'você gosta dela?'|| readItMarcus == 'vc gosta dela?' || readItMarcus == 'Você gosta dela?' || readItMarcus == 'vc gosta dela' || readItMarcus == 'voce gosta dela?' ||  readItMarcus == 'Voce gosta dela?'){
          var marcusResponden7 = document.getElementById('display-message-Marcus').innerHTML = "<p id='my-message'></p>"
          var marcusRespondePn7 = document.getElementById('my-message').innerHTML = "Eu AMO ela!</br>Olha só essa maravilha:<br/><img src='https://t.tudocdn.net/355611?w=646&h=284' width='100%' height='10%'/>"
      }
      
      else if( readItMarcus == 'apagar'){
          var marcusRespondeapaga = document.getElementById('display-message-Marcus').innerHTML = "<p id='my-message'></p>"
          var apagado = document.getElementById('your-message').innerHTML = "";
          var marcusRespondeapagaa = document.getElementById('my-message').innerHTML = ""
      }
  
  else if( readItMarcus == 'oii'|| readItMarcus == 'Oii' || readItMarcus == 'Oie' || readItMarcus == 'oie' || readItMarcus == 'oiii' ||  readItMarcus == 's' || readItMarcus == 'Oiii'){
          var marcusResponden9 = document.getElementById('display-message-Marcus').innerHTML = "<p id='my-message'></p>"
          var marcusRespondePn9 = document.getElementById('my-message').innerHTML = "Oieee, tudo bem?"
  }
  
      else {
          var marcusResponden = document.getElementById('display-message-Marcus').innerHTML = "<p id='my-message'></p>"
          var marcusRespondePn = document.getElementById('my-message').innerHTML = "Não entendi. Ainda não conheço muita coisa!"
      }
  }
  
  function sendemoji(){
      var sendmojicreate = document.getElementById('display-message').innerHTML = "<p id='your-message'></p>";
      var sendemoji = document.getElementById('your-message').innerHTML = "<img src='https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/full-moon-with-face.png' height='60' width='60'/>"
      var marcusRespondeemoji = document.getElementById('display-message-Marcus').innerHTML = "<p id='my-message'></p>"
      var sendemojime = document.getElementById('my-message').innerHTML = "<img src='https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/new-moon-face.png' height='60' width='60'/>"
  }
  
  
angular.module('chatBotApp', [])
  .controller('chatBotListController', function($scope) {

      // variable de back.
      var date = new Date();
      var quNumber = 1;
      var quBarem = [];
      var quReponse = "";
      var objQuest = window.question;
      //variable de scope.
      // contient la réponse que veut envoyer l'utilisateur.
      $scope.reponse ="";
      $scope.botTurn = false;
      $scope.isOnRepeat = false;
      $scope.userName = "user";
      $scope.botName = "Pbody"
      // content va suivre les méssage et les conserver.
      $scope.content = [
      {name: "Pbody", 
      mess: ["Bonjour ! je suis P-Body. Je vais étudier votre niveau de douleur actuel à l'aide d'un questionnaire."], 
      date: date.getHours()+":"+date.getMinutes(), 
      isDark: true},

      {name: "Pbody", 
      mess: objQuest.Q1, 
      date: date.getHours()+":"+date.getMinutes(), 
      isDark: true}
      ];

      // la gestion des méssages 
      $scope.addUserMessage =() => {
        date = new Date();
        quReponse = $scope.reponse;
        var msgToAdd = 
        {name: $scope.userName, 
        mess: [quReponse], 
        date: date.getHours()+":"+date.getMinutes(), 
        isDark: false
        };
        $scope.content.push(msgToAdd);
        $scope.reponse = "";
        $scope.botTurn = true;
        setTimeout("window.scrollTo(0,document.body.scrollHeight)", 1);
        reponseParse(quReponse);
      }

      $scope.addBotMessage =(botAsk, force = null) => {
        date = new Date();
        var msgToAdd = 
        {name: $scope.botName, 
        mess: botAsk,
        date: date.getHours()+":"+date.getMinutes(), 
        isDark: true
        };
        $scope.botTurn = false;
        if (force != null) {msgToAdd.name = $scope.userName;msgToAdd.isDark = false; $scope.botTurn = true;}
        $scope.content.push(msgToAdd);
        setTimeout("window.scrollTo(0,document.body.scrollHeight)", 1);
      }

      //ici les fonctions du bot hors questionnaire.
      var resetQuest =() => {
        $scope.addBotMessage(["Vous voulez recommencez ?"]);
        $scope.addBotMessage(["Oh oui !"],1);
        $scope.addBotMessage(["Je savais que les humains aimait soufrir !"]);
        $scope.addBotMessage(objQuest.Q1);
        quNumber = 1;quBarem = [];
      }
      var changeUserToFox = () => {$scope.addBotMessage(["Une nouvelle tête, futé !"]);$scope.userName="fox";$scope.addBotMessage(objQuest["Q"+quNumber]);}
      var changeBotToGbody = () => {$scope.addBotMessage(["Je passe le relais à mon ancêtre !"]);$scope.botName="Gbody";$scope.addBotMessage(["Je suis un peu cassé mais toujours puissant .."]);$scope.addBotMessage(objQuest["Q"+quNumber]);}
      var help = () => {$scope.addBotMessage(["Tu souffre ? tu as besoin d'aide ? bah va voir un humain !"]);$scope.addBotMessage(objQuest["Q"+quNumber]);}
      
      const localCommand= {
        "reset" : resetQuest,
        "fox" :   changeUserToFox,
        "gbody" : changeBotToGbody,
        "help" :  help
      }
      // Le bot va ici étudier la réponse.
      var  reponseParse = function (rep) {
          //on vérifie si la réponse contient l'une des réponse requise.
          for (let command in localCommand) {
            if (rep == command) {console.log(localCommand); return localCommand[command]();}
          }
          rep = rep.toLowerCase();
          for(var key in objQuest["R"+quNumber]){
              for(var poss in objQuest["R"+quNumber][key]){
                if(rep.includes(objQuest["R"+quNumber][key][poss])){
                    if (!result)
                      var result = [];
                    if (!result.includes(key))
                      result.push(key);
                  }
              }
          }
          console.log("result : "+result);
          // on va maintenant résoudre les différentes questions
          if (!result) {$scope.addBotMessage(['Je pense avoir mal compris la réponse. je répète la question.']);
                        return $scope.addBotMessage(objQuest["Q"+quNumber]);
          }else {questSuite(result);}
      }

      var questSuite = function (result) {
          switch (quNumber) {
            case 1:
                if (result.length > 1) {return $scope.addBotMessage(objQuest.Q1);}
                else if (result.includes("+1")) {quNumber = 2; $scope.addBotMessage(objQuest.Q2);
                }
                else if (result.includes("+0") && $scope.isOnRepeat === false) 
                      {$scope.addBotMessage(["Tant pis je ferais sans vous, moi j\'ai tout mon temps si on recharge pas la page !"]),
                      $scope.addBotMessage(["Regarde j\'ai pris ta place et moi ,je demande de répéter !"],1);
                      $scope.addBotMessage(objQuest.Q1);
                      $scope.isOnRepeat = true;
                }
                else if (result.includes("+0") && $scope.isOnRepeat === true) 
                      {$scope.addBotMessage(["Et bah voila !, je vous bloque ! n'est ce pas deuxième moi ?"]),
                      $scope.addBotMessage(["Sur ! j'vais l'avoir dans le temps"],1);
                }
            break;
            default:
                quNumber ++;
                quBarem.push(result);
                console.log("Barem : "+quBarem+" length: "+Object.keys(objQuest).length+" Num: "+quNumber);
                if (quNumber >= (Object.keys(objQuest).length/2 +1)) {return recapNotes();}
                else {$scope.addBotMessage(objQuest["Q"+quNumber]);}
                //addBotMessage =(["Mais qu'est ce tu fous la !, retourne bosser le bot !"]);
            break;
          }
      }

      var recapNotes = function () {
        let finalBarem = 0;
        for (var i = 1; i < quBarem.length; i++) {
          for (let j = 0; j < quBarem[i].length; j++){
            console.log("ajout au barem: "+quBarem[i][j])
            if (quBarem[i][j] !="non") {finalBarem+=1;}
          }
          console.log("final barem ="+finalBarem);
        }
        $scope.addBotMessage(["Votre douleur par EVS est a l'echelle de "+
          quBarem[0][quBarem[0].length - 1]+" et la douleur neuropatique est à un niveau "+
          finalBarem+" cette dernière est évaluer par le DN4."]);
        resetQuest();
      }
  });

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

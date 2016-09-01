
;(function(){

  
    angular.module('kingdoms') 
        .component('questionsComponent',{
        templateUrl:'comps/questions/questions.html',
        controller:QuestionsController,
        controllerAs:'QC'
}) 
    function QuestionsController(){
        var i=1
        var qc = this;
        var questions = {
            vertebrate: {
                body: 'Do you want to have jaws or no jaws?',
                option1: 'cyclostomata',
                option2: 'gnathostomata',
                button1txt:'You have jaws',
                button2txt:'You don\'t have jaws'
            },
            cyclostomata: {
                body: 'Do you want to be a scavenger or a parasite',
                option1: 'cyclostomata',//THIS IS THE END 
                option2:'lamprey',//THIS IS THE END 
                button1txt:'Scavenger',
                button2txt:'Parasite'
            },
            gnathostomata:{
                body:'Do you want to have a cartilage skeleton or a bony skeleton?',
                option1:'chondrichthyes',
                option2:'osteichthyes',
                button1txt:'Bony skeleton',
                button2txt:'Cartilage Skeleton'
            },
            chondrichthyes:{
                body:'Do you want to have a stomach or no stomach?',
                option1:'elasmobranchii',
                option2:'holocephali',
                button1txt:'Stomach',
                button2txt:'No Stomach'
            },
            elasmobranchii:{
                body:'Do you want to have a round body or a flat body?',
                option1:'selachii',
                option2:'batoidea',
                button1txt:'Round Body',
                button2txt:'Flat Body'
            },
            osteichthyes:{
                body:'Do you want to have fins on bones or lobes?',
                option1:'actinopterygii',
                option2:'sarcopterygii',
                button1txt:'Ray fins',
                button2txt:'Lobe Fins'
            },
            sarcopterygii:{
                body:'Do you want to have limbs with digits or without digits?',
                option1:'tetrapodomorpha',
                option2:'dipnomorpha',
                button1txt:'Limbs with Digits',
                button2txt:'Limbs without Digits'
            },
            tetrapodomorpha:{
                body:'Do you want to lay eggs on land or in water?',
                option1:'reptiles',
                option2:'amphibia',
                button1txt:'Eggs on Land',
                button2txt:'Eggs in Water'
            },
            salientiaCaudata:{
                body:'Do you want to lose your limbs or keep them?',
                option1:'caecillians',
                option2:'salientiaCaudataLimbs',
                button1txt:'Lose Limbs',
                button2txt:'Keep Limbs'
            },
            salientiaCaudataLimbs:{
                body:'Do you want to have a long body or a short body?',
                option1:'salientia',
                option2:'caudata',
                button1txt:'Short Body',
                button2txt:'Long Body'
            },
            reptiles:{
                body:'Do you want to produce milk for your young?',
                option1:'mammals',
                option2:'reptilesBirds',
                button1txt:'Yes',
                button2txt:'No'
            },
            reptilesBirds:{
                body:'Do you want to have a short body or a long body?',
                option1:'squamata',
                option2:'archosauromorpha',
                button1txt:'Long Body',
                button2txt:'Short Body'
            },
            squamata:{
                body:'Do you want to lose your limbs or keep them?',
                option1:'lizards',
                option2:'snakes',
                button1txt:'Keep Limbs',
                button2txt:'Lose Limbs'
            },
            archosauromorpha:{
                body:'Do you want to have a shell?',
                option1:'testunides',
                option2:'archosauriformes',
                button1txt:'Shell',
                button2txt:'No Shell'
            },
            archosauriformes:{
                body:'Do you want to have bony armor?',
                option1:'crocodilia',
                option2:'aves',
                button1txt:'Bony armor',
                button2txt:'No Bony Armor'
            },
            aves:{
                body:'Do you want to have a bird-like tail or a lizard-like tail?',
                option1:'sauriurae',
                option2:'ornithurae',
                button1txt:'Lizard Tail',
                button2txt:'Bird Tail'
            },
            ornithurae:{
                body:'Do you want to be aquatic or non-aquatic?',
                option1:'hesperornithes',
                option2:'neornithes',
                button1txt:'Aquatic',
                button2txt:'Not Aquatic'
            },
            neornithes:{
                body:'Do you want to be able to fly',
                option1:'neognatha',
                option2:'palaeognatha',
                button1txt:'Yes',
                button2txt:'No'
            },
            neognatha:{
                body:'Do you want to lay 1-2 eggs at a time or 5-10?',
                option1:'neoaves',
                option2:'galloanserae',
                button1txt:'1-2',
                button2txt:'5-10'
            },
            galloanserae:{
                body:'Do you want to live only on land or on land and in water?',
                option1:'galliformes',
                option2:'anseriformes',
                button1txt:'Land',
                button2txt:'Water'
            },
            galliformes:{
                body:'Do you want your young to hatch mature or immature?',
                option1:'cracidae',
                option2:'megapodiidae',
                button1txt:'Immature',
                button2txt:'Mature'
            },
            cracidae:{
                body:'Do you want to have a bald neck or a feathered neck?',
                option1:'numididae',
                option2:'gallimorphae',
                button1txt:'Bald',
                button2txt:'Feathered'
            },
            gallimorphae:{
                body:'Do you want to be from the Old World or the New World?',
                option1:'phasianidae',
                option2:'odontophoridae',
                button1txt:'Old World',
                button2txt:'New World'
            },
            anseriformes:{
                body:'Do you want to have hooks/barbs on your ribs?',
                option1:'anatidae',
                option2:'anhimidae',
                button1txt:'Yes',
                button2txt:'No'
            },
            mammals:{
                body:'Do you want to lay eggs?',
                option1:'monotremes',
                option2:'placental',
                button1txt:'Yes',
                button2txt:'No'
            },
            placental:{
                body:'Do you want your young to be born mature or immature?',
                option1:'eutheria',
                option2:'marsupial',
                button1txt:'Immature',
                button2txt:'Mature'
            },
            marsupial:{
                body:'Do you want to be from the Americas or Australia/Asia?',
                option1:' didelphimorphia',
                option2:'australidelphiaPaucituberculata',
                button1txt:'The Americas',
                button2txt:'Austrailia and Asia'
            },
            australidelphiaPaucituberculata:{
                body:'Do you want to be from South America or Australia?',
                option1:' paucituberculata',
                option2:'australidelphia',
                button1txt:'South America',
                button2txt:'Austrailia and Asia'
            },
            australidelphia:{
                body:'Do you want to be from South America or Australia?',
                option1:' diprotodontia',
                option2:'australidelphia',
                button1txt:'South America',
                button2txt:'Austrailia and Asia'
            }
        }

        function defineEnds(obj){
            for(var prop in obj){
                var name=obj[prop].option1
                // console.log(name)
                // console.log(obj[name])
                if(obj[name]===undefined){
                console.log(i++ +' '+name+' is a dead end')
                }
            }   
            }

        function askQuestion(name){
            qc.question = getQuestion(name)

            }

        function getQuestion(name){
            if(questions[name]){
                return questions[name];
            }
            //Trigger End
            qc.result = name;
            }

        function answer(choice){
            askQuestion(qc.question[choice]);
            }

        }

}());





// orginalfunction

        // function vertebrate(){
        // //Do you want to have jaws or no jaws?
        //     if (noJaws){
        //     cyclostomata 
        //     }
        //     else(jaws){
        //         gnathostomata
        //     }
        // }
        // function cyclostomata(){
        // //Do you want to be a scavenger or a parasite?
        //     if (scavenger){
        //         hagfish//
        //     }
        //     else(parasite){
        //         lamprey//
        //     }
        // }
        // function gnathostomata(){
        // //Do you want to have a cartilage skeleton or a bony skeleton?
        //     if(mineralizedSkeleton){
        //         chondrichthyes
        //     }
        //     else{
        //         osteichthyes//l.46
        //     }
        // }
        // function chondrichthyes(){
        // //Do you want to have a stomach or no stomach?
        //     if(stomach){
        //         elasmobranchii 
        //     }
        //     else(noStomach){
        //         holocephali//
        //     }
        // }
        // function elasmobranchii(){
        // //Do you want to have a round body or a flat body?
        //     if(roundBody){
        //         selachii//
        //     }
        //     else(flatBody){
        //         batoidea//
        //     }
        // }
        // function osteichthyes(){
        // //Do you want to have fins on bones or lobes?
        //     if(rayFins){
        //         actinopterygii//
        //     }
        //     else(lobeFins){
        //         sarcopterygii
        //     }
        // }
        // function sarcopterygii(){
        // //Do you want to have limbs with digits or without digits?
        //     if(limbsWithDigits){
        //         tetrapodomorpha
        //     }
        //     else(limbsWithoutDigits){
        //         dipnomorpha//
        //     }
        // }
        // function tetrapodomorpha(){
        // //Do you want to lay eggs on land or in water?
        //     if(amnioticEgg){
        //         mammals,reptiles/birds//l.91
        //     }
        //     else(noAmnioticEgg){
        //         amphibia
        //     }
        // }
        // function amphibia(){
        // //Do you want to lose your limbs or keep them?
        //     if(loseLimbs){
        //         caecillians//
        //     }
        //     else(keepLimbs){
        //         salientia,caudata
        //     }
        // }
        // function salientiaCaudata(){
        // //Do you want to have a long body or a short body?
        //     if(shortBody){
        //         salientia//
        //     }
        //     else(longBody){
        //         caudata//
        //     }
        // }
        // function mammals,reptiles/birds(){
        // //Do you want to produce milk for your young or no?
        //     if(milk){
        //         mammals//l.233
        //     }
        //     else(noMilk){
        //         reptiles/birds
        //     }
        // }
        // function reptilesBirds(){
        // //Do you want to have a short body or a long body?
        //     if(longBody){
        //         squamata
        //     }
        //     else(shortBody){
        //         archosauromorpha//l.118
        //     }
        // }
        // function squamata(){
        // //Do you want to lose your limbs or keep them?
        //     if(keepLimbs){
        //         lizards//
        //     }
        //     else(loseLimbs){
        //         snakes//
        //     }
        // }
        // function archosauromorpha(){
        // //Do you want to have a shell or no?
        //     if(shell){
        //         testunides//
        //     }
        //     else(noShell){
        //         archosauriformes
        //     }
        // }
        // function archosauriformes(){
        // //Do you want to have bony armor or no?
        //     if(bonyArmor){
        //         crocodilia//
        //     }
        //     else(no){
        //         aves
        //     }
        // }
        // function aves(){
        // //Do you want to have a bird-like tail or a lizard-like tail?
        //     if(lizardTail){
        //         sauriurae//
        //     }
        //     else(birdTail){
        //         ornithurae
        //     }
        // }
        // function ornithurae(){
        // //Do you want to be aquatic or non-aquatic?
        //     if(aquatic){
        //         hesperornithes//
        //     }
        //     else(nonAquatic){
        //         neornithes
        //     }
        // }
        // function neornithes(){
        // //Do you want to be able to fly or no?
        //     if(flightless){
        //         palaeognatha//
        //     }
        //     else(flying){
        //         neognatha
        //     }
        // }
        // function neognatha(){
        // //Do you want to lay 1-2 eggs at a time or 5-10?
        //     if(smallClutches){
        //         *neoaves
        //     }
        //     else(largeClutches){
        //         galloanserae
        //     }
        // }
        // //small clutches = 1-2 eggs at a time
        // //large clutches = 5-10 eggs at a time
        // function neoaves(){
        //     if(){

        //     }
        //     else(){
                
        //     }
        // }

        // function galloanserae(){
        // //Do you want to live only on land or on land and in water?
        //     if(landfowl){
        //         galliformes
        //     }
        //     else(waterfowl){
        //         anseriformes//l.219
        //     }
        // }
        // function galliformes(){
        // //Do you want your young to hatch mature or immature?
        //     if(immatureHatching){
        //         cracidae
        //     }
        //     else(matureHatching){
        //         megapodiidae//
        //     }
        // }
        // function cracidae(){
        // //Do you want to have a bald neck or a feathered neck?
        //     if(baldNeck){
        //         numididae//
        //     }
        //     else(featheredNeck){
        //         gallimorphae
        //     }
        // }
        // function gallimorphae(){
        // //Do you want to be from the Old World or the New World?
        //     if(oldWorld){
        //         phasianidae//
        //     }
        //     else(newWorld){
        //         odontophoridae//
        //     }
        // }
        // function anseriformes(){
        // //Do you want to have hooks/barbs on your ribs or no?
        //     if(uncinateRibs){
        //         anatidae//
        //     }
        //     else(noUncinateRibs){
        //         anhimidae//
        //     }
        // }
        // /*uncinate ribs =extensions of bone that project caudally from the vertical segment of each rib. (Uncinate means hooked from Latin uncinatus, from uncinus, barb, from uncus, hook.) They are found in birds (except for screamers), reptiles, and the early amphibian Ichthyostega.[1]

        // These processes can serve to attach scapula muscles,[1] and help to strengthen the rib cage overlapping with the rib behind them.[1][2] They are also shown to have a role in respiration by increasing the effectiveness of muscles involved in inspiration including the appendicocostal muscles.[3] The processes are short in walking birds and long in diving species and are of intermediate length in non-specialist birds.
        // */

        // function mammals(){
        // //Do you want to lay eggs or no?
        //     if(true){
        //         console.log("You lay eggs")
        //         monotremes()//
        //     }
        //     else(false){
        //         placental()
        //     }
        // }
        // function placental(){
        // //Do you want your young to be born mature or immature?
        //     if(true){
        //         console.log("Your young are born mature")
        //         eutheria()//l.288
        //     }
        //     else(false){
        //         console.log("Youryoun are born immature")
        //         marsupial()
        //     }
        // }
        // function marsupial(){
        // //Do you want to be from the Americas or Australia/Asia?
        //     if(true){
        //         console.log("You are from the Americas")
        //         didelphimorphia()//
        //     }
        //     else(false){
        //         console.log("You are from Australia/Asia")
        //         austPauc()
        //     }
        // }
        // function austPauc(){
        // //Do you want to be from South America or Australia?
        //     if(true){
        //         console.log("You are from South America")
        //         paucituberculata()//
        //     }
        //     else(false){
        //         console.log("You are from Australia")
        //         australidelphia()
        //     }
        // }
        // function australidelphia(){
        // //Do you want to be large or small?
        //     if(true){
        //         console.log("You are large")
        //         diprotodontia()//
        //     }
        //     else(false){
        //         console.log("You are small")
        //         dasyNotoPeram()//
        //     }
        // }

        // eutheria:{
        // body:'Do you want to be from South America/Africa or somewere else?'
        // option1:'sAAfr'//atlantogenata
        // option2:'SomewhereElse'//boreoeutheria
        // button1txt:'South America/Africa'
        // button2txt:'Somewhere Else'
        // },
        

        // atlantogenata:{
        // body:'Do you want to be from Africa or South America?'
        // option1:'africa'//afrotheria
        // option2:'southAmerica'//xenarthra
        // button1txt:'Africa'
        // button2txt:'South America'
        // },'   
            

        // boreoeutheria:{
        // body:'Do you want to be from Europe or Laurasia?'
        // option1:'europe'//euarchontoglires
        // option2:'laurasia'//laurasiatheria
        // button1txt:'Europe'
        // button2txt:'Laurasia'
        // },


        // euarchontoglires:{
        // body:'Do you want to have big feet or no?'
        // option1:'bigFeet'//glires
        // option2:'smallFeet'//euarchonta
        // button1txt:'Big Feet'
        // button2txt:'Small Feet'
        // },

        // euarchonta:{
        // body:'Do you want to have flaps of skin for flying between your fore- and hind-limbs?'
        // option1:'skinFlaps'//dermoptera
        // option2:'noSkinFlaps'//primates
        // button1txt:'Skin Flaps'
        // button2txt:'No Skin Flaps'
        // },

        // laurasiatheria:{
        // body:'Do you want males of your species to have external or internal reproductive organs?'
        // option1:'internal'//insecEulip
        // option2:'external'//scrotifera
        // button1txt:'Internal'
        // button2txt:'External'
        // },

        // scrotifera:{
        // body:'Do you want to have wings or no?'
        // option1:'wings'//chiroptera
        // option2:'noWings'//fereuungulata
        // button1txt:'Wings'
        // button2txt:'No Wings'
        // },

        // fereuungulata:{
        // body:'Do you want to have hooves or no?'
        // option1:'hooves'//ungulate
        // option2:'noHooves'//ferae
        // button1txt:'Hooves'
        // button2txt:'No Hooves'
        // },

        // ungulate:{
        // body:'Do you want to have an even number of toes or an odd number?'
        // option1:'even'//artiodactyla
        // option2:'odd'//perissodactyla
        // button1txt:'Even'
        // button2txt:'Odd'
        // },

        // artiodactyla:{
        // body:'Do you want to live in water or on land?'
        // option1:'water'//cetacea
        // option2:'land'//artiodactyla2
        // button1txt:'Water'
        // button2txt:'Land'
        // },

        // ferae:{
        // body:'Do you want to have scales or no?'
        // option1:'scales'//pholidota
        // option2:'noScales'//carnivora
        // button1txt:'Scales'
        // button2txt:'No Scales'
        // },

        // carnivora:{
        // body:'Do you want your middle & inner ear to be in a one-chambered bony structure or two-chambered?'
        // option1:'oneChambered'//caniformia
        // option2:'twoChambered'//feliformia
        // button1txt:'One-Chambered'
        // button2txt:'Two-Chambered'
        // },

        // feliformia:{
        // body:'Do you want to have highly specialized scent glands or no?'
        // option1:'highlySpecialized'//nandiniidae
        // option2:'notSpecialized'//felVivHyaHerpEup
        // button1txt:'Highly Specialized'
        // button2txt:'Not Highly Specialized'
        // },

        // felVivHyaHerpEup:{
        // body:'Do you want to have four toes on your hind feet or five?'
        // option1:'four'//feldiae
        // option2:'five'//vivHyaHerpEup
        // button1txt:'Four'
        // button2txt:'Five'
        // },

        // vivHyaHerpEup:{
        // body:/Do you want highly developed crushing teeth or underdeveloped?'
        // option1:'highlyDeveloped'//viverridae
        // option2:'underdeveloped'//hyaHerpEup
        // button1txt:'Highly Developed'
        // button2txt:'Underdeveloped'
        // },

        // hyaHerpEup:{
        // body:'Do you want to be dog-like or cat-like?'
        // option1:'dogLike'//hyaenidae
        // option2:'catLike'//herpEup
        // button1txt:'Dog-Like'
        // button2txt:'Cat-Like'
        // },

        // herpEup:{
        // body:'Do you want to be from Eurasia/Africa or Madagascar?'
        // option1:'eurasiaAfrica'//herpestidae
        // option2:'madagascar'//eupleridae
        // button1txt:'Eurasia/Africa'
        // button2txt:'Madagascar'
        // },

        // caniformia:{
        // body:'Do you want to lose or keep your 3rd upper molar?'
        // option1:'lose'//canidae
        // option2:'keep'//arctoidea
        // button1txt:'Lose'
        // button2txt:'Keep'
        // },

        // canidae:{
        // body:'Do you want to be able to partially retract your claws or want them to be fixed in place?'
        // option1:'retract'//foxes
        // option2:'fixed'//dods
        // button1txt:'Retract'
        // button2txt:'Fixed'
        // },

        // arctoidea:{
        // body:'Do you want to be an omnivore or a carnivore?'
        // option1:'omnivore'//bears
        // option2:'carnivore'//pinniMust
        // button1txt:'Omnivore'
        // button2txt:'Carnivore'
        // },

        // pinniMust:{
        // body:'Do you want to be semiaquatic or terrestrial?'
        // option1:'semiaquatic'//pinnipedia
        // option2:'terrestrial'//musteloidea
        // button1txt:'Semiaquatic'
        // button2txt:'Terrestrial'
        // },
      

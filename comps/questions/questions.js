var qc = this;
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



var questions = [{
    vertebrate: {
        body: 'Do you have a spine?',
        yes: 'cyclostomata',
        no: 'gnathostomata'
    },
    cyclostomata: {
        body: 'Hey there bub?',
        yes: 'You are a Hagfish'
    }
}]





vertebrate:{
body:'Do you want to have jaws or no jaws?'
option1:'jaws'//gnathostomata
option2:'noJaws'//cyclostomata 
button1txt:'Jaws'
button2txt:'No Jaws'
},

cyclostomata:{
body:'Do you want to be a scavenger or a parasite?'
option1:'scavenger'
option2:'parasite'
button1txt:'Scavenger'
button2txt:'Parasite'
},

gnathostomata:{
body:'Do you want to have a cartilage skeleton or a bony skeleton?'
option1:'cartilage'//chondrichthyes
option2:'bony'//osteichthyes
button1txt:'Cartilage Skeleton'
button2txt:'Bony Skeleton'
},

chondrichthyes:{
body:'Do you want to have a stomach or no stomach?'
option1:'stomach'//elasmobranchii 
option2:'noStomach'//holocephali
button1txt:'Stomach'
button2txt:'No Stomach'
},

elasmobranchii:{
body:'Do you want to have a round body or a flat body?'
option1:'round'//selachii
option2:'flat'//batoidea
button1txt:'Round Body'
button2txt:'Flat Body'
},

osteichthyes:{
body:'Do you want to have fins on bones or lobes?'
option1:'rayFins'
option2:'lobeFins'
button1txt:'Ray Fins'
button2txt:'Lobe Fins'
},

sarcopterygii:{
body:'Do you want to have limbs with digits or without digits?'
option1:'limbsWithDigits'//tetrapodomorpha
option2:'limbsWithoutDigits'//dipnomorpha
button1txt:'Limbs With Digits'
button2txt:'Limbs Without Digits'
},

tetrapodomorpha:{
body:'Do you want to lay eggs on land or in water?'
option1:'amnioticEgg'//mammals,reptiles/birds
option2:'noAmnioticEgg'//amphibia
button1txt:'On Land'
button2txt:'In Water'
},

amphibia:{
body:'Do you want to lose your limbs or keep them?'
option1:'loseLimbs'//caecillians
option2:'keepLimbs'//salientia,caudata
button1txt:'Lose Limbs'
button2txt:'Keep Limbs'
},

salientiaCaudata:{
body:'Do you want to have a long body or a short body?'
option1:'shortBody'//salientia
option2:'longBody'//caudata
button1txt:'Short Body'
button2txt:'Long Body'
},

mammReptBirds:{
body:'Do you want to produce milk for your young or no?'
option1:'milk'//mammals
option2:'noMilk'//reptiles/birds
button1txt:'Milk'
button2txt:'No Milk'
},

reptilesBirds:{
body:'Do you want to have a short body or a long body?'
option1:'longBody'//squamata
option2:'shortBody'//archosauromorpha
button1txt:'Long Body'
button2txt:'Short Body'
},

squamata:{
body:'Do you want to lose your limbs or keep them?'
option1:'keepLimbs'//lizards
option2:'loseLimbs'//snakes
button1txt:'Keep Limbs'
button2txt:'Lose Limbs'
},

archosauromorpha:{
body:'Do you want to have a shell or no?'
option1:'shell'//testunides
option2:'noShell'//archosauriformes
button1txt:'shell'
button2txt:'No Shell'
},

archosauriformes:{
body:'Do you want to have bony armor or no?'
option1:'bonyArmor'//crocodilia
option2:'noBonyArmor'//aves
button1txt:'bonyArmor'
button2txt:'noBonyArmor'
},

aves:{
body:'Do you want to have a bird-like tail or a lizard-like tail?'
option1:'lizardTail'//sauriurae
option2:'birdTail'//ornithurae
button1txt:'Lizard Tail'
button2txt:'Bird Tail'
},

ornithurae:{
body:'Do you want to be aquatic or non-aquatic?'
option1:'aquatic'//hesperornithes
option2:'nonAquatic'//neornithes
button1txt:'Aquatic'
button2txt:'Non-Aquatic'
},

neornithes:{
body:'Do you want to be able to fly or no?'
option1:'flightless'//palaeognatha
option2:'flying'//neognatha
button1txt:'Flightless'
button2txt:'Flying'
},

neognatha:{
body:'Do you want to lay 1-2 eggs at a time or 5-10?'
option1:'smallClutches'//neoaves
option2:'largeClutches'//galloanserae
button1txt:'1-2'
button2txt:'5-10'
},

neoaves:{
body:''
option1:''
option2:''
button1txt:''
button2txt:''
},

galloanserae:{
body:'Do you want to live only on land or on land and in water?'
option1:'landfowl'//galliformes
option2:'waterfowl'//anseriformes
button1txt:'Only on Land'
button2txt:'On Land and in Water'
},

galliformes:{
body:'Do you want your young to hatch mature or immature?'
option1:'immatureHatching'//cracidae
option2:'matureHatching'//megapodiidae
button1txt:'Immature Hatching'
button2txt:'MatureHatching'
},

cracidae:{
body:'Do you want to have a bald neck or a feathered neck?'
option1:'baldNeck'//numididae
option2:'featheredNeck'//gallimorphae
button1txt:'Bald Neck'
button2txt:'Feathered Neck'
},

gallimorphae:{
body:'Do you want to be from the Old World or the New World?'
option1:'oldWorld'//phasianidae
option2:'newWorld'//odontophoridae
button1txt:'Old World'
button2txt:'New World'
},

anseriformes:{
body:'Do you want to have hooks/barbs on your ribs or no?'
option1:'uncinateRibs'//anatidae
option2:'noUncinateRibs'//anhimidae
button1txt:'Hooks/Barbs on Ribs'
button2txt:'No Hooks/Barbs on Ribs'
},

mammals:{
body:'Do you want to lay eggs or no?'
option1:'eggs'//monotremes
option2:'noEggs'//placental
button1txt:'Eggs'
button2txt:'No Eggs'
},

placental:{
body:'Do you want your young to be born mature or immature?'
option1:'mature'//eutheria
option2:'immature'//marsupial
button1txt:'Mature'
button2txt:'Immature'
},

marsupial:{
body:'Do you want to be from the Americas or Australia/Asia?'
option1:'americas'//didelphimorphia
option2:'australiaAsia'//austPauc
button1txt:'Americas'
button2txt:'Australia/Asia'
},

austPauc:{
body:'Do you want to be from South America or Australia?'
option1:'southAmerica'//paucituberculata
option2:'australia'//australidelphia
button1txt:'South America'
button2txt:'Australia'
},

australidelphia:{
body:'Do you want to be large or small?'
option1:'large'//diprotodontia
option2:'small'//dasyNotoPeram
button1txt:'Large'
button2txt:'Small'
},

eutheria:{
body:'Do you want to be from South America/Africa or somewere else?'
option1:'sAAfr'//atlantogenata
option2:'SomewhereElse'//boreoeutheria
button1txt:'South America/Africa'
button2txt:'Somewhere Else'
},
   

atlantogenata:{
body:'Do you want to be from Africa or South America?'
option1:'africa'//afrotheria
option2:'southAmerica'//xenarthra
button1txt:'Africa'
button2txt:'South America'
},'   
    

boreoeutheria:{
body:'Do you want to be from Europe or Laurasia?'
option1:'europe'//euarchontoglires
option2:'laurasia'//laurasiatheria
button1txt:'Europe'
button2txt:'Laurasia'
},


euarchontoglires:{
body:'Do you want to have big feet or no?'
option1:'bigFeet'//glires
option2:'smallFeet'//euarchonta
button1txt:'Big Feet'
button2txt:'Small Feet'
},

euarchonta:{
body:'Do you want to have flaps of skin for flying between your fore- and hind-limbs?'
option1:'skinFlaps'//dermoptera
option2:'noSkinFlaps'//primates
button1txt:'Skin Flaps'
button2txt:'No Skin Flaps'
},

laurasiatheria:{
body:'Do you want males of your species to have external or internal reproductive organs?'
option1:'internal'//insecEulip
option2:'external'//scrotifera
button1txt:'Internal'
button2txt:'External'
},

scrotifera:{
body:'Do you want to have wings or no?'
option1:'wings'//chiroptera
option2:'noWings'//fereuungulata
button1txt:'Wings'
button2txt:'No Wings'
},

fereuungulata:{
body:'Do you want to have hooves or no?'
option1:'hooves'//ungulate
option2:'noHooves'//ferae
button1txt:'Hooves'
button2txt:'No Hooves'
},

ungulate:{
body:'Do you want to have an even number of toes or an odd number?'
option1:'even'//artiodactyla
option2:'odd'//perissodactyla
button1txt:'Even'
button2txt:'Odd'
},

artiodactyla:{
body:'Do you want to live in water or on land?'
option1:'water'//cetacea
option2:'land'//artiodactyla2
button1txt:'Water'
button2txt:'Land'
},

ferae:{
body:'Do you want to have scales or no?'
option1:'scales'//pholidota
option2:'noScales'//carnivora
button1txt:'Scales'
button2txt:'No Scales'
},

carnivora:{
body:'Do you want your middle & inner ear to be in a one-chambered bony structure or two-chambered?'
option1:'oneChambered'//caniformia
option2:'twoChambered'//feliformia
button1txt:'One-Chambered'
button2txt:'Two-Chambered'
},

feliformia:{
body:'Do you want to have highly specialized scent glands or no?'
option1:'highlySpecialized'//nandiniidae
option2:'notSpecialized'//felVivHyaHerpEup
button1txt:'Highly Specialized'
button2txt:'Not Highly Specialized'
},

felVivHyaHerpEup:{
body:'Do you want to have four toes on your hind feet or five?'
option1:'four'//feldiae
option2:'five'//vivHyaHerpEup
button1txt:'Four'
button2txt:'Five'
},

vivHyaHerpEup:{
body:/Do you want highly developed crushing teeth or underdeveloped?'
option1:'highlyDeveloped'//viverridae
option2:'underdeveloped'//hyaHerpEup
button1txt:'Highly Developed'
button2txt:'Underdeveloped'
},

hyaHerpEup:{
body:'Do you want to be dog-like or cat-like?'
option1:'dogLike'//hyaenidae
option2:'catLike'//herpEup
button1txt:'Dog-Like'
button2txt:'Cat-Like'
},

herpEup:{
body:'Do you want to be from Eurasia/Africa or Madagascar?'
option1:'eurasiaAfrica'//herpestidae
option2:'madagascar'//eupleridae
button1txt:'Eurasia/Africa'
button2txt:'Madagascar'
},

caniformia:{
body:'Do you want to lose or keep your 3rd upper molar?'
option1:'lose'//canidae
option2:'keep'//arctoidea
button1txt:'Lose'
button2txt:'Keep'
},

canidae:{
body:'Do you want to be able to partially retract your claws or want them to be fixed in place?'
option1:'retract'//foxes
option2:'fixed'//dods
button1txt:'Retract'
button2txt:'Fixed'
},

arctoidea:{
body:'Do you want to be an omnivore or a carnivore?'
option1:'omnivore'//bears
option2:'carnivore'//pinniMust
button1txt:'Omnivore'
button2txt:'Carnivore'
},

pinniMust:{
body:'Do you want to be semiaquatic or terrestrial?'
option1:'semiaquatic'//pinnipedia
option2:'terrestrial'//musteloidea
button1txt:'Semiaquatic'
button2txt:'Terrestrial'
},

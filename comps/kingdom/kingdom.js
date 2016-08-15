;(function(){

    angular.module('kingdoms') 
        .component('kingdom',{
        templateUrl:'comps/kingdom/kingdom.html',
        controller:KingdomController
        }) 
        function KingdomController() {
            // determing kingdom
            var creature={

            }
            function findingPhylum(creature){
                function cellular(value){
                    if(value==0){
                        creature.cellular='unicellular'
                        console.log('You are a single celled organism')
                        console.log(creature)
                    }
                    else{
                        creature.cellular='multicellular'
                        console.log('You are a multicell orginism')
                        console.log(creature)
                    }
                }
                function trueTissues(value){
                    if(value==0){
                        creature.trueTissues='no'
                        console.log('You are a sponge')
                        console.log(creature)

                    }
                    else{
                        creature.trueTissues='yes'
                        console.log('You are not a Sponge')
                         console.log(creature)
                    }
                }
                function layers(value){
                    if(value==0){
                        creature.layers='diploblastic'
                        console.log('You have two layers')
                        console.log(creature)
                    }
                    else{
                        creature.layers='triplobastic'
                        console.log('You have three Layers')
                        console.log(creature)
                    }
                }
                function symmertry(value){
                    if(value==0){
                        creature.symmertry='radial'
                        console.log('You are a Jellyfish')
                        console.log(creature)
                    }
                    else{
                        creature.symmertry='radial'
                        console.log('You are not a Jellyfish')
                        console.log(creature)
                    }
                }
                function forms(value){
                    if(value==0){
                        creature.forms='cnidarian'
                        console.log('You have different forms')
                        console.log(creature)
                    }
                    else{
                        creature.forms='ctenophore'
                        console.log('You have one form')
                        console.log(creature)
                    }
                }
                function bodyCavities(value){
                    if(value==0){
                        creature.cavity='acoelomate'
                        console.log('You are a flatworm')
                        console.log(creature)
                    }
                    else if(value==1){
                        creature.cavity='pseudocoelomate'
                        console.log('You are a Mollusk')
                        console.log(creature)
                    }
                    else{
                        creature.cavity='coelomate'
                        console.log('You are a fish or Animal')
                        console.log(creature)
                    }
                }
                function stome(value){
                    if(value==0){
                        creature.stome='deuterostome'
                        console.log('Butt First')
                        console.log(creature)
                    }
                    else{
                        creature.stome='protostome'
                        console.log('Mouth First')
                        console.log(creature)
                    }
                }
            }
                
                findingPhylum(creature)
                //console.log(creature)
        }

}());
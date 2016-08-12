;(function(){

    angular.module('kingdoms') 
        .component('kingdom',{
        templateUrl:'comps/kingdom/kingdom.html',
        controller:KingdomController
        }) 
        function KingdomController() {
            // determing kingdom
            var creature={
                trueTissues:"no",
                symmertry:"radial",
                bodyCavities:"no",
                coelmates:"protostome"
            }
            function findingPhylum(creature){
                function trueTissues(value){
                    if(value==0){
                        creature.trueTissues='no'
                        console.log('You are a sponge')
                    }
                    else{
                        creature.trueTissues='yes'
                        console.log('You are not a Sponge')
                        symmertry
                    }
                }
                }
                
                findingPhylum(creature)
        }

}());
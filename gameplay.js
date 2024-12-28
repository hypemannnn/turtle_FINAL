AFRAME.registerComponent("collisiondetector",{
    init: function(){
        counter=0;
        this.el.addEventListener("collide",function(e){
            e.detail.target.el.remove();
            console.log(e.detail.body.el)
             counter+=1
            var x=document.getElementById("turt_counter")
            x.setAttribute("text", {value: String(counter)});
            if (counter==5){
                x.setAttribute("text", {value: ("all")})
            }

        });
        // el is element
    },

});

// AFRAME.registerComponent("collisiondetector", {
//     init: function () {
//         this.el.addEventListener("collide", function (e) {
//             console.log("Collision detected with:", e.detail.body.el); // Log the collided entity
//             if (e.detail.body.el) {
//                 e.detail.body.el.parentNode.removeChild(e.detail.body.el); // Remove the collided entity
//                 console.log("Turtle removed!");
//             }
//         });
//     },
// })
class Mango{

        constructor(x,y,radius,name){
                var options={

                    isStatic:true,
                    restitution:0,
                    friction:1
                }
            
                this.body=Bodies.circle(x,y,radius,options)
                this.image=loadImage("mango.png");
                World.add(world,this.body);
                this.name=name;
             }

        display(){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 50, 0, 40, 40);
            pop();
         }

}
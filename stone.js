class Stone{

        constructor(x,y,width,height){

            var options={
                isStatic:false,
                restitution:0,
                density:1.2,
                friction:1

            }


            this.body=Bodies.rectangle(x,y,width,height,options)
            this.width=width;
            this.height=height;
            this.image=loadImage("stone.png");
            World.add(world,this.body);
        }

        display(){
            //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
            //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 20, 20);
        pop();


        }

}
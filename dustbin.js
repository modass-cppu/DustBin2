class Dustbin{
    constructor(x , y){
        var options = {
            isStatic:true
        }
        this.x = x
        this.y = y
        this.DustbinWidth = 200;
        this.DustbinHeight = 213;
        this.WallThickness = 20;
        //this.angle = 0;

        this.bottomBody = Bodies.rectangle(this.x, this.y, this.DustbinWidth, this.WallThickness, options)

        this.LeftWallBody = Bodies.rectangle(this.x - this.DustbinWidth/2, this.y - this.DustbinHeight/2, this.WallThickness, this.DustbinHeight, options)
        Matter.Body.setAngle(this.LeftWallBody, this.angle)
        
        this.RightWallBody = Bodies.rectangle(this.x + this.DustbinWidth/2, this.y - this.DustbinHeight/2, this.WallThickness, this.DustbinHeight, options)
        Matter.Body.setAngle(this.RightWallBody, this.angle)

        this.image = loadImage("Images/dustbingreen.png")

        World.add(world, this.bottomBody)
        World.add(world, this.LeftWallBody)
        World.add(world, this.RightWallBody)

    }
    display(){
        var posBottom = this.bottomBody.position
        var posLeft = this.LeftWallBody.position
        var posRight = this.RightWallBody.position

        push()
        translate(posLeft.x, posLeft.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255, 255, 255)
        rotate(this.angle)
        //rect(0, 0, this.WallThickness, this.DustbinHeight)
        pop()

        push()
        translate(posRight.x, posRight.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255, 255, 255)
        rotate(this.angle * (-1))
        //rect(0, 0, this.WallThickness, this.DustbinHeight)
        pop()

        push()
        translate(posBottom.x, posBottom.y)
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255, 255, 255)
        //rect(0, 0, this.DustbinWidth, this.WallThickness)
        imageMode(CENTER);
        image(this.image, 0, -this.DustbinHeight/2, this.DustbinWidth, this.DustbinHeight);
        pop()
        
    }
}   
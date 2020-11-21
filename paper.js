class Paper{
    constructor(x, y, diameter){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2    
        }
        this.x = x
        this.y = y
        this.diameter = diameter
        this.image = loadImage("Images/paper.png")
        this.body = Bodies.circle(this.x, this.y, (this.diameter - 20)/2, options)

        

        World.add(world, this.body)

    }
    display(){
        var paperpos = this.body.position
        push()
        translate(paperpos.x, paperpos.y)
        //ellipseMode(RADIUS)
        imageMode(CENTER)
        strokeWeight(3)
        fill(255, 0, 255)
        image(this.image, 0, 0, this.diameter, this.diameter)
        pop()
    }
}
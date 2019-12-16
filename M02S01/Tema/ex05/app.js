class Shape {
  constructor(
    posX,
    posY, 
    width, 
    height, 
    color, 
    borderColor
  ) {
    this.posX = posX; 
    this.posY = posY; 
    this.height = height; 
    this.width = width; 
    this.color = color; 
    this.borderColor = borderColor;

    this.shape = document.createElement('div');
    this.shape.classList.add('shape');
    this.shape.classList.add('shape--rectangle');

    this.shape.style.left = this.posX;
    this.shape.style.top = this.posY;

    this.shape.style.width=this.width;
    this.shape.style.height = this.height;
    this.shape.style.backgroundColor = this.color;
    this.shape.style.borderColor = this.borderColor;

    document.body.appendChild(this.shape);
  }

  
  setPosX(x) {
    this.posX = x;
  }

  setPosY(y) {
    this.posY = y;
  }

  setWidth(w) {
    this.width = w;
  }

  setHeight(h) {
    this.height = h;
  }

  setColor(c) {
    this.color = c; 
  }

  setBorderColor(bc) {
    this.borderColor = bc;
  }
}

class Rectangle extends Shape {
  
}

class Circle extends Shape {
  constructor(
    posX,
    posY, 
    radius, 
    color, 
    borderColor
  )


 
  {
    super(
      posX,
      posY, 
      1000, 
      color, 
      borderColor
    );


    // this.shape = document.createElement('div');

    // this.shape.classList.add('shape');
    // this.shape.classList.add('shape--circle');
    
    // this.shape.style.posX = this.posX;
    // this.shape.style.posY = this.posY;
    // this.shape.style.radio = this.radius;
    // this.shape.style.color = this.color;
    // this.shape.style.borderColor = this.borderColor;

    // document.appendChild(this.shape);

    this.borderRadius = this.setBorderRadius(radius);
  }

  setBorderRadius(br) {

    return br;
  }
}

class Square extends Shape {
  constructor(
    posX,
    posY, 
    width, 
    color, 
    borderColor
  )
  {
  super (posX, posY, width, width, color, borderColor)
}

}

let rectangle = new Shape(10,20,100,200,'red','black')
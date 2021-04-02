class Land
{
  constructor(x,y,width,height)
  {
      this.x=x
      this.y=y
      this.width=width
      this.height=height

  }

  display()
  {
     fill('#7CAF00')
     rect(this.x, this.y, this.width, this.height)
  }
}
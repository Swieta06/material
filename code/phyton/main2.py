class App:
    def __init__(self,**kwargs):
        """
        ini adalah contructor methode dari class app
        """
        self.xyz=123
        self.data=kwargs
    def getXyz(self):
        return self.xyz,self.data,"Jumatan"
    def  setXyz(self,value):
        self.xyz=value

class SubApp(App):
    def __init__(self,**kwargs):
        """
        ini adalah constructor methode untuk mengimplementasikan 
        attribute dan methode dari parent class yang di inheritkan(App)
        """
        super().__init__(**kwargs)

    @property
    def showDataWithXyz(self):
        """
        ini adalah methode yang dimanipulasi menjadi attribute
        dengan dekorator @property
        """
        self.data["xyz"]=self.xyz
        return self.data
    def showAll(self, m1,m2):
        print(m1,m2())

if __name__=="__main__":
    # app = App()
    app=SubApp(name="franky",age=33)
    for i in app.getXyz():
         print(i)
    print(app.xyz)
    app.setXyz(456)
    print(app.xyz)
    print(app.data)
    print(app.showDataWithXyz)
    app.showAll(app.showDataWithXyz,app.getXyz)
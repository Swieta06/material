class App:
    def __init__(self):
        """
        ini adalah contructor methode dari class app
        """
        self.xyz=123
    def getXyz(self):
        pass
    def  setXyz(self,value):
        self.xyz=value

class SubApp(App):
    def __init__(self):
        super().__init__()
  

if __name__=="__main__":
    # app = App()
    app=SubApp()
    #child=Child()
    print(app.xyz)
    app.setXyz(456)
    print(app.xyz)
    #child.register(company="google",address="US",email="google@gmail.com")

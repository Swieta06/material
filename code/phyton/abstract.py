from abc import ABC, abstractmethod

class Parent(ABC):
    def __init__(self):
        super().__init__()
    
    @abstractmethod
    def getData(self):
        return
    @abstractmethod
    def setData(self):
        pass

class Child(Parent):
    data ={"name":"Jhon doe","email":"john.doe@gmail.com"}

    def __init__(self):
        super().__init__()
    def setData(self,**kwargs):
        self.data=kwargs
    def getData(self):
        return self.data

    @staticmethod
    def register(**kwargs):
        for k,v in kwargs.items():
            print(f"{k}={v}")

child=Child()
child.setData(name="johan",age="32")
child.register(company="google",address="US",email="google@gmail.com")
print(child.getData())
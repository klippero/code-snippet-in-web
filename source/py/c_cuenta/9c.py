class Cuenta:
    def __init__(self,cantidad = 0 ):
        self.__saldo = cantidad

    def muestraSaldo(self):
        print( f"Saldo: {self.__saldo}€" )

    def liquidarIntereses(self):
        self.__saldo = self.__saldo + self.__saldo / 100 * 10

    def ingreso(self,cantidad):
        self.__saldo = self.__saldo + cantidad

    def reintegro(self,cantidad):
        self.__saldo = self.__saldo - cantidad

mi_cuenta = Cuenta(1000)
mi_cuenta.muestraSaldo()

mi_cuenta2 = Cuenta()
mi_cuenta2.muestraSaldo()
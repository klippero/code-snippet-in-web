class Punto
    def initialize(x,y)
        @x = x
        @y = y
    end

    def muestraPunto
        puts "(#{@x},#{@y})"
    end
end


q = Punto.new(1,-4)
q.muestraPunto
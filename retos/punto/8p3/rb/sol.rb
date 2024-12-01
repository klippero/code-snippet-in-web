class Punto
    def initialize(x,y)
        @x = x
        @y = y
        @origenX = x
        @origenY = y
    end

    def mover( nueva_x, nueva_y)
        @x = nueva_x
        @y = nueva_y
    end

    def irAorigen
        @x = @origenX
        @y = @origenY
    end

    def muestraPunto
        puts "(#{@x},#{@y})"
    end
end


q = Punto.new(1,-4)
q.muestraPunto

q.mover(10,17)
q.muestraPunto

q.irAorigen
q.muestraPunto
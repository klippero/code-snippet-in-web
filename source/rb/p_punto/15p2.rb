class Punto
    def initialize(x=0,y=0)
        @origenX = x
        @origenY = y

        @x = x
        @y = y

        @previa_x = x
        @previa_y = y
    end

    def mover( nueva_x=@x, nueva_y=@y)
        @previa_x = @x
        @previa_y = @y

        @x = nueva_x
        @y = nueva_y
    end

    def irAorigen
        mover( @origenX, @origenY )
    end

    def muestraPunto
        puts "(#{@x},#{@y})"
    end

    def vuelve
        mover( @previa_x, @previa_y )
    end

    def to_s
        return "(#{@x},#{@y})"
    end

    def distancia_origen
        return ( @x ** 2 + @y ** 2 ) ** (1/2.0)
    end

    def distancia(otro)
        return ( (otro.x - @x) ** 2 + (otro.y - @y) ** 2 ) ** (1/2.0)
    end

    def x
        return @x
    end

    def y
        return @y
    end
end


p1 = Punto.new(11,13)
puts p1

p2 = Punto.new(3,6)
puts p2.distancia(p1)
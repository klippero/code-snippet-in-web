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
end


p = Punto.new(11,13)
puts p
puts p.distancia_origen

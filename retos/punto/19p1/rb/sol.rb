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

    def distancia(otro = Punto.new(0,0))
        return ( (otro.x - @x) ** 2 + (otro.y - @y) ** 2 ) ** (1/2.0)
    end

    def x
        return @x
    end

    def y
        return @y
    end

    def cuadrante
        if @x > 0 && @y > 0
            result = 1
        elsif  @x < 0 && @y > 0
            result = 2
        elsif  @x < 0 && @y < 0
            result = 3
        elsif  @x > 0 && @y < 0
            result = 4
        else
            result = 0
        end
        return result
    end

    def en_diagonal?
        return @x == @y
    end
end

p1 = Punto.new(1,-4)
puts "#{p1} en la diagonal: #{p1.en_diagonal?}"

p2 = Punto.new(6,6)
puts "#{p2} en la diagonal: #{p2.en_diagonal?}"
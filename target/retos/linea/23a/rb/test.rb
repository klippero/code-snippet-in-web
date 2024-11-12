class Linea
    def initialize( longitud )
        @longitud = longitud
    end

    def to_s
        result = ''
        @longitud.times do
            result = result + '-'
        end
        return result
    end

    def longitud
        return @longitud
    end

    def +(otra)
        return Linea.new( @longitud + otra.longitud )
    end
end


l1 = Linea.new(3)
l2 = Linea.new(5)

puts "#{l1} + #{l2} = #{l1+l2}"
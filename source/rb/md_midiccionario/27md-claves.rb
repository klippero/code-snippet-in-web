class MiDiccionario
    def initialize(hash)
        @hash = hash
    end

    def keys
        result = []
        @hash.keys.each do |key|
            result << key
        end
        return result
    end
end


mates = {
   'alicia' => 7.5,
   'arturo' => 6,
   'eva' => 5.5,
   'matias' => 7,
   'jaime' => 4.5,
   'ainara' => 10,
   'carlos' => 8,
   'carmen' => 6.6,
   'rosalina' => 9.1,
   'jorge' => 5.2,
   'lucía' => 9.5,
   'yago' => 9.6,
   'cristina' => 4.3
}

md = MiDiccionario.new(mates)
puts "#{md.keys}"

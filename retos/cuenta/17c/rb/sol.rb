class Cuenta
    def initialize( cantidad = 0 )
        if cantidad > 0
            @saldo = cantidad.to_f
        else
            @saldo = 0.0
        end
    end

    def to_s
        return "Saldo: #{@saldo}€"
    end

    def liquidarIntereses
        @saldo = @saldo + @saldo / 100 * 10
    end

    def ingreso( cantidad )
        @saldo = @saldo + cantidad
    end

    def reintegro( cantidad )
        @saldo = @saldo - cantidad
    end
end

class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    while !@game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    round_success_message unless @game_over
  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      puts color
    end
  end

  def require_sequence
    puts "input the sequence, one color on each line"
    @seq.each do |color|
      input = gets.chomp
      if color[0] != input
        @game_over = true
        break
      end
    end
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "you won this round! here's the next round:"
    @sequence_length += 1
  end

  def game_over_message
    puts "game over. you won #{@sequence_length} games!"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end

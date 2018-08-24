require 'byebug'
class Map
  def initialize
    @arr = []
  end

  def set(key, val)
    #debugger
    idx_pair = nil
    @arr.each_with_index { |pair, idx| idx_pair = idx if pair[0] == key }
    if idx_pair.nil?
      @arr << [key, val]
    else
      @arr[idx_pair] = [key, val]
    end
  end

  def get(key)
    return nil if !@arr.any? { |pair| pair[0] == key }
    @arr.each { |pair| return pair[1] if pair[0] == key}
  end

  def delete(key)
    val = get(key)
    @arr = @arr.reject { |pair| pair[0] == key }
    val
  end

  def show
    @arr.to_s
  end
end

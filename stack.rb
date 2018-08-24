class Stack
  def initialize
    @arr = []
  end

  def push(el)
    @arr << el
    el
  end

  def pop
    @arr.pop
  end

  def peek
    @arr[-1]
  end
end

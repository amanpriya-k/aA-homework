class Queue
  def initialize
    @arr = []
  end

  def enqueue(el)
    @arr << el
    el
  end

  def dequeue
    @arr.shift
  end

  def peek
    @arr[0]
  end
end

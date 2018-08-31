class LRUCache

  def initialize(size)
    @cache = []
    @size = size
  end

  def count
    # returns number of elements currently in cache
    @cache.length
  end

  def add(el)
    # adds element to cache according to LRU principle
    @cache.delete(el) if @cache.include?(el)
    @cache = @cache[1..-1] if count >= @size
    @cache << el
  end

  def show
    # shows the items in the cache, with the LRU item first
    puts @cache.to_s
  end

  private
  # helper methods go here!

end

fish_array = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def sluggish_octopus(arr)
  big = nil
  arr.each do |this_fish|
    biggest = true
    arr.each do |other_fish|
      biggest = false if other_fish.length > this_fish.length && other_fish!=this_fish
    end
    big = this_fish if biggest
  end
  big
end

def merge_sort(arr, &prc)
  return arr if arr.length <= 1

  mid = length/2
  left = merge_sort(arr.take(mid), &prc)
  right = merge_sort(arr.drop(mid), &prc)
  merge(left, right, &prc)
end

def merge(left, right, &prc)
  result = []
  until left.empty? || right.empty?
    if prc.call(left.first, right.first) == 1
      result << right.shift
    else
      result << left.shift
    end
  end
  result + left + right
end

def dominant_octopus(arr)
  prc = Proc.new { |f1, f2| f1.length <=> f2.length }
  merge_sort(arr, prc)
end

def clever_octopus(arr)
  biggest = arr.first
  arr.each do |fish|
    biggest = fish if fish.length > biggest_fish.length
  end
  biggest
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]


def slow_dance(target, arr)
  arr.each_with_index do |tile, idx|
    return idx if tile == target
  end
end

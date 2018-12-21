require 'linked_list'

RSpec.describe LinkedList do
  it 'adds items' do
    list = LinkedList.new

    list.add(1)
    list.add(2)

    expect(list.value_at(1)).to eq(1)
    expect(list.value_at(2)).to eq(2)
  end

  it 'starts empty' do
    list = LinkedList.new

    expect(list.empty).to eq(true)
    expect(list.size).to eq(0)
  end

  it 'increments the size' do
    list = LinkedList.new

    list.add(1)
    expect(list.size).to eq(1)

    list.add(2)
    expect(list.size).to eq(2)
  end
end

export type Car = {
  id: string
  name: string
  type: string
  price: number
  power: number
  acceleration: string
  range: number
  torque: number
  topSpeed: number
  drive: string
  fuel: string
  seats: number
  hero: string
  gallery: string[]
  colors: string[]
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`

export const cars: Car[] = [
  { id: 'a1', name: 'A1', type: 'Sport Sedan', price: 4890000, power: 320, acceleration: '5.2 sec', range: 620, torque: 420, topSpeed: 250, drive: 'AWD', fuel: 'Electric', seats: 5, hero: img('photo-1553440569-bcc63803a83d'), gallery: [img('photo-1553440569-bcc63803a83d'), img('photo-1542362567-b07e54358753'), img('photo-1492144534655-ae79c964c9d7')], colors: ['Obsidian', 'Arctic White', 'Titanium'] },
  { id: 'r7', name: 'R7', type: 'Performance Coupe', price: 7250000, power: 480, acceleration: '3.9 sec', range: 510, torque: 600, topSpeed: 305, drive: 'AWD', fuel: 'Petrol', seats: 2, hero: img('photo-1503736334956-4c8f8e92946d'), gallery: [img('photo-1503736334956-4c8f8e92946d'), img('photo-1511919884226-fd3cad34687c'), img('photo-1492144534655-ae79c964c9d7')], colors: ['Racing Red', 'Graphite', 'Midnight Blue'] },
  { id: 'x5', name: 'X5', type: 'Luxury SUV', price: 6490000, power: 390, acceleration: '4.8 sec', range: 580, torque: 510, topSpeed: 270, drive: 'AWD', fuel: 'Hybrid', seats: 5, hero: img('photo-1519641471654-76ce0107ad1b'), gallery: [img('photo-1519641471654-76ce0107ad1b'), img('photo-1606664515524-ed2f786a0bd6'), img('photo-1551830820-330a71b99659')], colors: ['Titanium', 'Arctic White', 'Obsidian'] },
  { id: 'e9', name: 'E9', type: 'Electric Sedan', price: 5690000, power: 410, acceleration: '4.3 sec', range: 720, torque: 550, topSpeed: 260, drive: 'RWD', fuel: 'Electric', seats: 5, hero: img('photo-1618843479313-40f8afb4b4d8'), gallery: [img('photo-1618843479313-40f8afb4b4d8'), img('photo-1563720223185-11003d516935'), img('photo-1542282088-72c9c27ed0cd')], colors: ['Midnight Blue', 'Arctic White', 'Graphite'] },
  { id: 'gt', name: 'GT', type: 'Grand Tourer', price: 8990000, power: 560, acceleration: '3.6 sec', range: 540, torque: 690, topSpeed: 320, drive: 'AWD', fuel: 'Petrol', seats: 4, hero: img('photo-1544829099-b9a0c07fad1a'), gallery: [img('photo-1544829099-b9a0c07fad1a'), img('photo-1566023888470-7b3c7b15a1d0'), img('photo-1504215680853-026ed2a45def')], colors: ['Obsidian', 'Racing Red', 'Silver'] },
  { id: 'x9', name: 'X9', type: 'Premium SUV', price: 9490000, power: 510, acceleration: '4.2 sec', range: 610, torque: 640, topSpeed: 285, drive: 'AWD', fuel: 'Hybrid', seats: 7, hero: img('photo-1606664515524-ed2f786a0bd6'), gallery: [img('photo-1606664515524-ed2f786a0bd6'), img('photo-1551830820-330a71b99659'), img('photo-1519641471654-76ce0107ad1b')], colors: ['Graphite', 'Arctic White', 'Titanium'] },
  { id: 's3', name: 'S3', type: 'Sports Hatch', price: 3990000, power: 280, acceleration: '5.8 sec', range: 480, torque: 380, topSpeed: 240, drive: 'FWD', fuel: 'Petrol', seats: 5, hero: img('photo-1494976388531-d1058494cdd8'), gallery: [img('photo-1494976388531-d1058494cdd8'), img('photo-1503376780353-7e6692767b70'), img('photo-1541899481282-d53bffe3c35d')], colors: ['Racing Red', 'Obsidian', 'Arctic White'] },
  { id: 'evx', name: 'EV-X', type: 'Performance Electric SUV', price: 7890000, power: 520, acceleration: '3.8 sec', range: 650, torque: 700, topSpeed: 290, drive: 'AWD', fuel: 'Electric', seats: 5, hero: img('photo-1590362891991-f776e747a588'), gallery: [img('photo-1590362891991-f776e747a588'), img('photo-1560958089-b8a1929cea89'), img('photo-1552519507-da3b142c6e3d')], colors: ['Midnight Blue', 'Graphite', 'Arctic White'] },
]

export const formatPrice = (price: number) => `₹${(price / 100000).toFixed(2)} Cr`
export const getCar = (id: string) => cars.find((car) => car.id === id) ?? cars[0]

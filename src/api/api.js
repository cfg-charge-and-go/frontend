export async function getChargingStations(center) {
  const response = await fetch(`http://127.0.0.1:4000/charging-stations/${center.lat}/${center.lng}`)
  const data = await response.json()
  const stations = data.map(device => ({lat: parseFloat(device.ChargeDeviceLocation.Latitude), lng: parseFloat(device.ChargeDeviceLocation.Longitude), name: device.ChargeDeviceName}))
  return stations
}

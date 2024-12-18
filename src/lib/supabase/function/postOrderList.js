import supabase from "../supabaseConfig";

export default async function postOrderList(tableNum, orderList) {
  const response = await supabase.from('qr-order-allOrderList').insert({ orderList, tableNum }).select();
  if (response.error) {
    console.error(response.error.message);
    throw new Error(response.error.message);
  }
  return response;
}
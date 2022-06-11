import React from "react";

function Page(){
    return (
        <div>
            <div class="h-1/6">
                <img class=" w-2/3  " src="https://static.rock.so/file/yp8GDyo7/V8lLJao8/7178768cdd9ab5385de71e262251f8e2/kofi_memberships.png" alt=""/>
            </div>
            <div class="flex ">
                
                <img class="align-center h-3/4 w-2/3 " src="https://static.rock.so/file/yp8GDyo7/V8lLJao8/bd8fa6db449356e209acedf634850086/kofi_shop.png" alt=""/>
                
                <div class="flex-1 ">
                    <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span class="text-gray-500 sm:text-sm"> $ </span>
                        </div>
                        <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00"/>
                        <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                        <select id="currency" name="currency" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                            <option>USD</option>
                            <option>CAD</option>
                            <option>EUR</option>
                        </select>
                        </div>
                    </div>
                </div>

            </div>
            <div class="">
                <img class="h-3/4 w-2/3  " src="https://static.rock.so/file/yp8GDyo7/V8lLJao8/52ec4888c9c63d315ee91916f3569748/kofi_donation.png" alt=""/>
            </div>
        </div>
    );
}
export default Page;
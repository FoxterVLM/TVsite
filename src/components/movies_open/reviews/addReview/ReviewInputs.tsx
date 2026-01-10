import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {useReview} from "../../../../stores/useReview.ts";
import {reviewSchema} from "../../../../schemas/reviewSchema.ts";

export default function ReviewInputs() {

    const {setIsClicked, addReview, setIsAdded} = useReview();

    type FormDataType = {
        nickname: string,
        country: string,
        rating: number,
        text: string,
    }

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(reviewSchema),
    })

    const onSubmit : SubmitHandler<FormDataType> = (data) => {
        addReview(data);
        setIsAdded(true);
        setIsClicked(false);
    }

  return (
    <div className="review-add mb-[50px]">
      <form
        action=""
        className="review-form flex justify-center flex-col items-center gap-[30px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="nickname flex flex-col text-white gap-2">
          <label
            htmlFor="nickname"
            className="nickname-label text-white text-[20px] font-semibold"
          >
            Nickname
          </label>
          <input
            type="text"
            className="nickname-input max-w-[200px] rounded-[12px] bg-[#262626] p-2 outline-none ease-in-out duration-300 hover:scale-125"
            id="nickname"
            placeholder="Type your name..."
            {...register("nickname")}
          />
            {errors.nickname && <p className="text-red-500 -mt-4">{errors.nickname.message}</p>}
        </div>

        <div className="country flex flex-col text-white gap-2">
          <label
            htmlFor="country"
            className="country-label text-white text-[20px] font-semibold"
          >
            Country
          </label>
          <input
            type="text"
            className="country-input max-w-[200px] rounded-[12px] bg-[#262626] p-2 outline-none ease-in-out duration-300 hover:scale-125"
            id="country"
            placeholder="Country..."
            {...register("country")}
          />
            {errors.country && <p className="text-red-500 -mt-4">{errors.country.message}</p>}
        </div>

        <div className="rating flex flex-col text-white gap-2">
          <label className="rating-label text-white text-[20px] font-semibold">
            Rating
          </label>
          <input
            type="float"
            className="rating-input [appearance:textfield]
            [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:appearance-none
            max-w-[200px] rounded-[12px] bg-[#262626] p-2 outline-none ease-in-out duration-300 hover:scale-125"
            placeholder="From 1 to 5..."
            {...register("rating")}
          />
            {errors.rating && <p className="text-red-500 -mt-4">{errors.rating.message}</p>}
        </div>

        <div className="review-text flex flex-col text-white gap-2">
          <label
            htmlFor="review"
            className="review-text-label text-white text-[20px] font-semibold"
          >
            Your Review
          </label>
          <textarea
            className="review-text-input min-w-[300px] min-h-[200px] rounded-[12px] bg-[#262626] p-2 outline-none ease-in-out duration-300 hover:scale-125 resize-none"
            {...register("text")}
          />
            {errors.text && <p className="text-red-500 -mt-4 max-w-[200px]">{errors.text.message}</p>}
        </div>
          <button className="form-submit bg-[#E50000] max-w-[200px] rounded-[12px] p-[10px] text-white font-medium cursor-pointer hover:scale-105 transition-500 ease-in-out">Publish Review</button>
          <button className="form-cancel bg-[#999999] max-w-[200px] rounded-[12px] p-[10px] text-white font-medium cursor-pointer hover:scale-105 transition-500 ease-in-out" onClick={() => setIsClicked(false)}>Cancel</button>
      </form>
    </div>
  );
}

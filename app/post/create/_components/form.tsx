/* eslint-disable jsx-a11y/label-has-associated-control */

"use client";

import { useForm } from "effector-forms";
import React from "react";

import { Editor } from "@/components/presentational";
import { createPostModel } from "@/stores";
import { cn } from "@/utils";

export function Form() {
  const loading = false;
  const { fields, submit, eachValid } = useForm(createPostModel.form);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="space-y-4"
    >
      <div className="form-control">
        <label className="label" htmlFor="title">
          <span className="label-text">Title</span>
        </label>
        <input
          value={fields.title.value}
          onChange={(e) => fields.title.onChange(e.target.value)}
          onBlur={() => fields.title.onBlur()}
          id="title"
          type="text"
          className="input input-bordered w-full"
        />

        <p className="text-error mt-2">{fields.title.errorText()}</p>
      </div>

      <div className="form-control">
        <label className="label" htmlFor="shortDesc">
          <span className="label-text">Short Description</span>
        </label>
        <textarea
          value={fields.shortDesc.value}
          onChange={(e) => fields.shortDesc.onChange(e.target.value)}
          onBlur={() => fields.shortDesc.onBlur()}
          id="shortDesc"
          className="textarea textarea-bordered w-full"
        />

        <p className="text-error mt-2">{fields.shortDesc.errorText()}</p>
      </div>

      <div className="form-control">
        <label className="label" htmlFor="content">
          <span className="label-text">Content</span>
        </label>
        <Editor
          value={fields.text.value}
          onChange={(value) => fields.text.onChange(value)}
          onBlur={() => fields.text.onBlur()}
        />
        <p className="text-error mt-2">{fields.text.errorText()}</p>
      </div>

      <div className="form-control">
        <label className="label" htmlFor="featuredImg">
          <span className="label-text">Featured Image URL</span>
        </label>
        <input
          value={fields.featuredImg.value}
          onChange={(e) => fields.featuredImg.onChange(e.target.value)}
          onBlur={() => fields.featuredImg.onBlur()}
          id="featuredImg"
          type="text"
          className="input input-bordered w-full"
        />
        <p className="text-error mt-2">{fields.featuredImg.errorText()}</p>
      </div>

      <div className="form-control">
        <label className="label" htmlFor="postImg">
          <span className="label-text">Post Image URL</span>
        </label>
        <input
          value={fields.postImg.value}
          onChange={(e) => fields.postImg.onChange(e.target.value)}
          onBlur={() => fields.postImg.onBlur()}
          id="postImg"
          type="text"
          className="input input-bordered w-full"
        />
        <p className="text-error mt-2">{fields.postImg.errorText()}</p>
      </div>

      <button
        type="submit"
        className={cn("btn btn-primary", loading && "loading")}
        disabled={loading || !eachValid}
      >
        {loading ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
}

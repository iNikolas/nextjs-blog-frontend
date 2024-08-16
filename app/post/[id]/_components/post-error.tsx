import Link from "next/link";
import React from "react";

export function PostError({ onRetry }: { onRetry: () => void }) {
  return (
    <dialog open className="modal">
      <div className="modal-box p-0">
        <div className="card bg-error text-error-content shadow-lg">
          <div className="card-body">
            <h2 className="text-2xl font-bold">Oops! Something went wrong.</h2>
            <p className="text-lg mb-6">
              We encountered an issue while fetching the post. Please try again
              or go back to the main page.
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onRetry}
              >
                Retry
              </button>
              <Link href="/">
                <button type="button" className="btn btn-secondary">
                  Go to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}

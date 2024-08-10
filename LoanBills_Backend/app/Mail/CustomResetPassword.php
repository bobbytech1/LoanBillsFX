<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CustomResetPassword extends Mailable
{
    use Queueable, SerializesModels;

    public $token;
    public $email;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($token, $email)
    {
        $this->token = $token;
        $this->email = $email;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $frontendUrl = config('app.frontend_url'); // Add frontend URL to config/app.php

        $url = $frontendUrl . '/reset-password?token=' . $this->token . '&email=' . urlencode($this->email);

        return $this->view('emails.reset-password')
                    ->with([
                        'url' => $url,
                    ]);
    }
}
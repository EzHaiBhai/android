const copyToClipboard = async () => {
  try {
    const element = document.querySelector(".user-select-all");
    await navigator.clipboard.writeText(element.textContent);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const copyEVENT = async () => {
  try {
    await navigator.clipboard.writeText(EVENT);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const q2= async () => {
  try {
    await navigator.clipboard.writeText(Q2);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const q3= async () => {
  try {
    await navigator.clipboard.writeText(Q3);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};


const q5= async () => {
  try {
    await navigator.clipboard.writeText(Q5);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};


const q6= async () => {
  try {
    await navigator.clipboard.writeText(Q6);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};



const q7= async () => {
  try {
    await navigator.clipboard.writeText(Q7);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};


const q8= async () => {
  try {
    await navigator.clipboard.writeText(Q8);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const q9 = async () => {
  try {
    await navigator.clipboard.writeText(Q9);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const q10 = async () => {
  try {
    await navigator.clipboard.writeText(Q10);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const q11 = async () => {
  try {
    await navigator.clipboard.writeText(Q11);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const q12 = async () => {
  try {
    await navigator.clipboard.writeText(Q12);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const q13 = async () => {
  try {
    await navigator.clipboard.writeText(Q13);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const q14 = async () => {
  try {
    await navigator.clipboard.writeText(Q14);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const q15 = async () => {
  try {
    await navigator.clipboard.writeText(Q15);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const q16 = async () => {
  try {
    await navigator.clipboard.writeText(Q16);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};
const q18 = async () => {
  try {
    await navigator.clipboard.writeText(Q18);
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
  }
};

const Q2=`

 private lateinit var etUsername: EditText
    private lateinit var etPassword: EditText
    private lateinit var btn:Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)

        etUsername=findViewById(R.id.username)
        etPassword=findViewById(R.id.password)
        btn= findViewById(R.id.btn)

        btn.setOnClickListener{
            if (etUsername.text.toString()=="admin" && etPassword.text.toString()=="admin")
                Toast.makeText(applicationContext,"Login Success",Toast.LENGTH_LONG).show()
            else
                Toast.makeText(applicationContext,"Login Failed",Toast.LENGTH_LONG).show()
        }

    }

`;


const Q18 = `
MAD -> Practical - 18
----------------------

1) Activity_main.xml file :-
-----------------------------

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/activity_main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/colorPrimary"
    android:orientation="vertical"
    android:theme="@style/Theme.AppCompat"
    tools:context=".MainActivity">
 
    <ImageView
        android:id="@+id/imageView"
        android:layout_width="match_parent"
        android:layout_height="430dp"
        android:background="@drawable/download"
        android:contentDescription="@string/todo" />
 
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_margin="20dp"
        android:background="@color/colorAccent"
        android:orientation="horizontal"
        android:padding="10dp">
 
        <Button
            android:id="@+id/pause"
            style="@style/Widget.AppCompat.Button.Borderless.Colored"
            android:layout_width="125dp"
            android:layout_height="match_parent"
            android:background="@android:drawable/ic_media_pause"
            android:onClick="musicpause" />
 

        <Button
            android:id="@+id/start"
            style="@style/Widget.AppCompat.Button.Borderless"
            android:layout_width="125dp"
            android:layout_height="match_parent"
            android:background="@android:drawable/ic_media_play"
            android:onClick="musicplay" />
 
        <Button
            android:id="@+id/stop"
            style="@style/Widget.AppCompat.Button.Borderless"
            android:layout_width="125dp"
            android:layout_height="match_parent"
            android:background="@android:drawable/ic_delete"
            android:onClick="musicstop" />
    </LinearLayout>
</LinearLayout>

2) Main Activity.java file :-
-----------------------------
package com.example.amusinz;
 
import android.media.MediaPlayer;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
 
public class MainActivity
    extends AppCompatActivity {
 
    // Instantiating the MediaPlayer class
    MediaPlayer music;
 
    @Override
    protected void onCreate(
        Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
 
        // Adding the music file to our
        // newly created object music
        music = MediaPlayer.create(
            this, R.raw.sound);
    }
 
    // Playing the music
    public void musicplay(View v)
    {
        music.start();
    }
 
    // Pausing the music
    public void musicpause(View v)
    {
        music.pause();
    }
 
    // Stopping the music
    public void musicstop(View v)
    {
        music.stop();
        music
            = MediaPlayer.create(
                this, R.raw.sound);
    }
}

`;

const Q16 = `
MAD - Practical - 16 : Data Driven Authentication
--------------------------------------------------

Here is the full Kotlin code for the application:

1) User.kt

data class User(
    val id: String,
    val password: String
)


2) UserDatabase.kt

import android.content.Context
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper

class UserDatabase(context: Context) :
    SQLiteOpenHelper(context, "user_database", null, 1) {

    override fun onCreate(db: SQLiteDatabase?) {
        db?.execSQL("CREATE TABLE users (id TEXT PRIMARY KEY, password TEXT)")
    }

    override fun onUpgrade(db: SQLiteDatabase?, oldVersion: Int, newVersion: Int) {
        db?.execSQL("DROP TABLE IF EXISTS users")
        onCreate(db)
    }
}


3) UserDao.kt :-

import android.content.Context
import android.database.sqlite.SQLiteDatabase

class UserDao(context: Context) {
    private val database: SQLiteDatabase

    init {
        database = UserDatabase(context).writableDatabase
    }

    fun addUser(user: User) {
        database.execSQL("INSERT INTO users VALUES (?, ?)",
            arrayOf((link unavailable), user.password))
    }

    fun authenticateUser(id: String, password: String): Boolean {
        val cursor = database.rawQuery("SELECT * FROM users WHERE id = ? AND password = ?",
            arrayOf(id, password))
        val isAuthenticated = cursor.count > 0
        cursor.close()
        return isAuthenticated
    }
}


4) MainActivity.kt :-

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private lateinit var userDao: UserDao

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        userDao = UserDao(this)

        findViewById<Button>(R.id.loginButton).setOnClickListener {
            val id = findViewById<EditText>(R.id.idEditText).text.toString()
            val password = findViewById<EditText>(R.id.passwordEditText).text.toString()

            if (userDao.authenticateUser(id, password)) {
                Toast.makeText(this, "Login successful", Toast.LENGTH_SHORT).show()
            } else {
                Toast.makeText(this, "Invalid id or password", Toast.LENGTH_SHORT).show()
            }
        }
    }
}



`;

const Q15 = `
MAD - Practical - 15
---------------------

Here is the full Kotlin code for the application:

1) User.kt

data class User(
    val id: Int,
    val name: String,
    val address: String,
    val contactNumber: String
)


2) UserDatabase.kt

import android.content.Context
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper

class UserDatabase(context: Context) :
    SQLiteOpenHelper(context, "user_database", null, 1) {

    override fun onCreate(db: SQLiteDatabase?) {
        db?.execSQL("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, address TEXT, contact_number TEXT)")
    }

    override fun onUpgrade(db: SQLiteDatabase?, oldVersion: Int, newVersion: Int) {
        db?.execSQL("DROP TABLE IF EXISTS users")
        onCreate(db)
    }
}


3) UserDao.kt

import android.content.Context
import android.database.sqlite.SQLiteDatabase

class UserDao(context: Context) {
    private val database: SQLiteDatabase

    init {
        database = UserDatabase(context).writableDatabase
    }

    fun addUser(user: User) {
        database.execSQL("INSERT INTO users VALUES (?, ?, ?, ?)",
            arrayOf((link unavailable), user.name, user.address, user.contactNumber))
    }

    fun updateUser(user: User) {
        database.execSQL("UPDATE users SET name = ?, address = ?, contact_number = ? WHERE id = ?",
            arrayOf(user.name, user.address, user.contactNumber, (link unavailable)))
    }

    fun deleteUser(id: Int) {
        database.execSQL("DELETE FROM users WHERE id = ?", arrayOf(id))
    }

    fun getAllUsers(): List<User> {
        val cursor = database.rawQuery("SELECT * FROM users", null)
        val users = mutableListOf<User>()
        while (cursor.moveToNext()) {
            users.add(User(
                cursor.getInt(0),
                cursor.getString(1),
                cursor.getString(2),
                cursor.getString(3)
            ))
        }
        cursor.close()
        return users
    }
}


4) MainActivity.kt

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private lateinit var userDao: UserDao

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        userDao = UserDao(this)

        findViewById<Button>(R.id.addButton).setOnClickListener {
            val id = findViewById<EditText>(R.id.idEditText).text.toString().toInt()
            val name = findViewById<EditText>(R.id.nameEditText).text.toString()
            val address = findViewById<EditText>(R.id.addressEditText).text.toString()
            val contactNumber = findViewById<EditText>(R.id.contactNumberEditText).text.toString()
            userDao.addUser(User(id, name, address, contactNumber))
            Toast.makeText(this, "User added", Toast.LENGTH_SHORT).show()
        }

        findViewById<Button>(R.id.updateButton).setOnClickListener {
            val id = findViewById<EditText>(R.id.idEditText).text.toString().toInt()
            val name = findViewById<EditText>(R.id.nameEditText).text.toString()
            val address = findViewById<EditText>(R.id.addressEditText).text.toString()
            val contactNumber = findViewById<EditText>(R.id.contactNumberEditText).text.toString()
            userDao.updateUser(User(id, name, address, contactNumber))
            Toast.makeText(this, "User updated", Toast.LENGTH_SHORT).show()
        }

        findViewById<Button>(R.id.deleteButton).setOnClickListener {
            val id = findViewById<EditText>(R.id.idEditText).text.toString().toInt()
            userDao.deleteUser(id)
            Toast.makeText(this, "User deleted", Toast.LENGTH_SHORT).show()
        }

        findViewById<Button>(R.id.listButton).setOnClickListener {
            val users = userDao.getAllUsers()
            Toast.makeText(this, users.toString(), Toast.LENGTH_SHORT).show()
        }
    }
}

`;

const Q14 = `
MAD - Practical - 14
----------------------

Here is the full Kotlin code for the application:

1) MainActivity.kt

import android.os.Bundle
import android.view.View
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.ContextCompat

class MainActivity : AppCompatActivity() {

    private lateinit var button: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        button = findViewById(R.id.button)

        val sharedPreferences = getSharedPreferences("background_color", MODE_PRIVATE)
        val selectedColor = sharedPreferences.getInt("color", ContextCompat.getColor(this, R.color.default_color))
        window.decorView.setBackgroundColor(selectedColor)

        button.setOnClickListener {
            ColorPickerDialog(this) { color ->
                window.decorView.setBackgroundColor(color)
                sharedPreferences.edit().putInt("color", color).apply()
            }.show()
        }
    }
}


2) ColorPickerDialog.kt

import android.app.Dialog
import android.content.Context
import android.graphics.Color
import android.view.View
import android.widget.Button

class ColorPickerDialog(context: Context, private val onColorSelected: (Int) -> Unit) : Dialog(context) {

    init {
        setContentView(R.layout.dialog_color_picker)

        findViewById<Button>(R.id.button_red).setOnClickListener {
            onColorSelected(Color.RED)
            dismiss()
        }

        findViewById<Button>(R.id.button_green).setOnClickListener {
            onColorSelected(Color.GREEN)
            dismiss()
        }

        findViewById<Button>(R.id.button_blue).setOnClickListener {
            onColorSelected(Color.BLUE)
            dismiss()
        }
    }
}

`;


const Q13 = `
MAD -> Practical - 13
-----------------------

1) activity_main.xml file:-
---------------------------
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">
 
    <!--text view for heading-->
    <TextView
        android:id="@+id/idTVHeader"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="30dp"
        android:gravity="center_horizontal"
        android:padding="5dp"
        android:text="Welcome to Geeks for Geeks \n Login Form"
        android:textAlignment="center"
        android:textColor="@color/purple_700"
        android:textSize="18sp" />
 
    <!--edit text for user name-->
    <EditText
        android:id="@+id/idEdtUserName"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/idTVHeader"
        android:layout_marginStart="10dp"
        android:layout_marginTop="50dp"
        android:layout_marginEnd="10dp"
        android:hint="Enter UserName"
        android:inputType="textEmailAddress" />
 
    <!--edit text for user password-->
    <EditText
        android:id="@+id/idEdtPassword"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/idEdtUserName"
        android:layout_marginStart="10dp"
        android:layout_marginTop="20dp"
        android:layout_marginEnd="10dp"
        android:hint="Enter Password"
        android:inputType="textPassword" />
 
    <!--button to register our new user-->
    <Button
        android:id="@+id/idBtnLogin"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/idEdtPassword"
        android:layout_marginStart="10dp"
        android:layout_marginTop="20dp"
        android:layout_marginEnd="10dp"
        android:text="Login"
        android:textAllCaps="false" />
 
</RelativeLayout>

2) activity_home.xml file:-
----------------------------
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".HomeActivity">
     
    <!--text view for displaying heading-->
    <TextView
        android:id="@+id/idTVHeader"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:gravity="center_horizontal"
        android:text="Welcome back again to Geeks for Geeks"
        android:textAlignment="center"
        android:textColor="@color/purple_700"
        android:textSize="18sp" />
     
    <!--text view for displaying user name-->
    <TextView
        android:id="@+id/idTVUserName"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/idTVHeader"
        android:layout_centerInParent="true"
        android:layout_marginTop="20dp"
        android:gravity="center_horizontal"
        android:text="UserName"
        android:textAlignment="center"
        android:textColor="@color/purple_700"
        android:textSize="25sp" />
 
    <!--button for making user log out-->
    <Button
        android:id="@+id/idBtnLogout"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@id/idTVUserName"
        android:layout_centerInParent="true"
        android:layout_marginTop="10dp"
        android:text="LogOut"
        android:textAllCaps="false" />
     
</RelativeLayout>

3) HomeActivity.java file :-
----------------------------
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
 
import androidx.appcompat.app.AppCompatActivity;
 
import com.parse.ParseUser;
 
public class HomeActivity extends AppCompatActivity {
 
    // creating a variable 
    // for our text view..
    private TextView userNameTV;
     
    // button for logout
    private Button logoutBtn;
 
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        logoutBtn = findViewById(R.id.idBtnLogout);
         
        // initializing our variables
        userNameTV = findViewById(R.id.idTVUserName);
         
        // getting data from intent.
        String name = getIntent().getStringExtra("username");
         
        // setting data to our text view.
        userNameTV.setText(name);
        
        // initializing click listener for logout button
        logoutBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // calling a method to logout our user.
                ParseUser.logOutInBackground(e -> {
                    if (e == null) {
                        Toast.makeText(HomeActivity.this, "User Logged Out", Toast.LENGTH_SHORT).show();
                        Intent i = new Intent(HomeActivity.this, MainActivity.class);
                        startActivity(i);
                        finish();
                    }
                });
            }
        });
    }
}

4) MainActivity.java file :-
----------------------------
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
 
import androidx.appcompat.app.AppCompatActivity;
 
import com.parse.ParseUser;
 
public class MainActivity extends AppCompatActivity {
     
    // creating variables for our edit text and buttons.
    private EditText userNameEdt, passwordEdt;
    private Button loginBtn;
 
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
         
        // initializing our edit text  and buttons.
        userNameEdt = findViewById(R.id.idEdtUserName);
        passwordEdt = findViewById(R.id.idEdtPassword);
        loginBtn = findViewById(R.id.idBtnLogin);
         
        // adding on click listener for our button.
        loginBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                 
                // on below line we are getting data from our edit text.
                String userName = userNameEdt.getText().toString();
                String password = passwordEdt.getText().toString();
                 
                // checking if the entered text is empty or not.
                if (TextUtils.isEmpty(userName) && TextUtils.isEmpty(password)) {
                    Toast.makeText(MainActivity.this, "Please enter user name and password", Toast.LENGTH_SHORT).show();
                }
                 
                // calling a method to login our user.
                loginUser(userName, password);
            }
        });
    }
 
    private void loginUser(String userName, String password) {
        // calling a method to login a user.
        ParseUser.logInInBackground(userName, password, (parseUser, e) -> {
            // after login checking if the user is null or not.
            if (parseUser != null) {
                // if the user is not null then we will display a toast message
                // with user login and passing that user to new activity.
                Toast.makeText(this, "Login Successful ", Toast.LENGTH_SHORT).show();
                Intent i = new Intent(MainActivity.this, HomeActivity.class);
                i.putExtra("username", userName);
                startActivity(i);
            } else {
                // display a toast message when user logout of the app.
                ParseUser.logOut();
                Toast.makeText(MainActivity.this, e.getMessage(), Toast.LENGTH_LONG).show();
            }
        });
    }
}



`;

const Q12 = `
MAD -> Practical - 12
----------------------

1) AndroidManifest.xml file :-
------------------------------

<?xml version="1.0" encoding="utf-8"?> 
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:dist="http://schemas.android.com/apk/distribution"
    package="com.example.gfg"> 
    <uses-permission android:name="android.permission.SEND_SMS"/> 
    <dist:module dist:instant="true" /> 
  
    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme"> 
        <activity android:name=".MainActivity"> 
            <intent-filter> 
                <action android:name="android.intent.action.MAIN" /> 
  
                <category android:name="android.intent.category.LAUNCHER" /> 
            </intent-filter> 
        </activity> 
    </application> 
  
</manifest>
 
2) activity_main . xml :-
-------------------------
<?xml version="1.0" encoding="utf-8"?> 
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:orientation="vertical"
    android:layout_marginTop="140dp"
    android:layout_height="match_parent"
    tools:context=".MainActivity"> 
  
  
    <EditText
        android:id="@+id/editText"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:ems="10"
        android:hint="Enter number"
        android:inputType="textPersonName" /> 
  
    <EditText
        android:id="@+id/editText2"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:ems="10"
        android:hint="Enter message"
        android:inputType="textPersonName" /> 
  
    <Button
        android:id="@+id/button"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="20dp"
        android:layout_marginLeft="60dp"
        android:layout_marginRight="60dp"
        android:text="SEND" /> 
</LinearLayout>

3) MainActivity.java :-
-----------------------

package com.example.gfg; 
  
import androidx.appcompat.app.AppCompatActivity; 
  
import android.os.Bundle; 
import android.telephony.SmsManager; 
import android.view.View; 
import android.widget.Button; 
import android.widget.EditText; 
import android.widget.Toast; 
  
public class MainActivity extends AppCompatActivity { 
    EditText phonenumber,message; 
    Button send; 
    @Override
    protected void onCreate(Bundle savedInstanceState) { 
        super.onCreate(savedInstanceState); 
        setContentView(R.layout.activity_main); 
        send=findViewById(R.id.button); 
        phonenumber=findViewById(R.id.editText); 
        message=findViewById(R.id.editText2); 
        send.setOnClickListener(new View.OnClickListener() { 
  
            public void onClick(View view) { 
                String number=phonenumber.getText().toString(); 
                String msg=message.getText().toString(); 
                try { 
                    SmsManager smsManager=SmsManager.getDefault(); 
                    smsManager.sendTextMessage(number,null,msg,null,null); 
                    Toast.makeText(getApplicationContext(),"Message Sent",Toast.LENGTH_LONG).show(); 
                }catch (Exception e) 
                { 
                    Toast.makeText(getApplicationContext(),"Some fields is Empty",Toast.LENGTH_LONG).show(); 
                } 
            } 
        }); 
    } 
}
`;

const Q11 = `
MAD -> Practical - 11
---------------------

1) Main Activity.java file :-
-----------------------------
package com.geeksforgeeks.gfg.dial; 
  
// importing packages 
import android.content.Intent; 
import android.net.Uri; 
import android.support.v7.app.AppCompatActivity; 
import android.os.Bundle; 
import android.view.View; 
import android.widget.Button; 
import android.widget.EditText; 
import android.widget.Toast; 
  
public class MainActivity extends AppCompatActivity { 
  
    @Override
    protected void onCreate(Bundle savedInstanceState)  
    { 
        super.onCreate(savedInstanceState); 
  
        // Binding MainActivity.java with  
        // activity_main.xml file 
        setContentView(R.layout.activity_main); 
      
    } 
  
    // This function is called when button is clicked. 
    public  void Call(View v) 
    { 
        // Find the EditText by its unique ID 
        EditText e = (EditText)findViewById(R.id.editText); 
  
        // show() method display the toast with message  
        // "clicked" 
        Toast.makeText(this, "clicked", Toast.LENGTH_LONG) 
             .show(); 
  
        // Use format with "tel:" and phoneNumber created is  
        // stored in u. 
        Uri u = Uri.parse("tel:" + e.getText().toString()); 
  
        // Create the intent and set the data for the  
        // intent as the phone number. 
        Intent i = new Intent(Intent.ACTION_DIAL, u); 
  
        try
        { 
            // Launch the Phone app's dialer with a phone  
            // number to dial a call. 
            startActivity(i);  
        } 
        catch (SecurityException s) 
        { 
            // show() method display the toast with  
            // exception message. 
            Toast.makeText(this, "An error occurred", Toast.LENGTH_LONG) 
                 .show(); 
        } 
    } 
} 

2) activity_main.xml file :-
----------------------------

<?xml version="1.0" encoding="utf-8"?> 
<android.support.constraint.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    xmlns:app="http://schemas.android.com/apk/res-auto"
  
    <!-- covers entire width of the screen -->
    android:layout_width="match_parent" 
  
    <!-- covers entire height of the screen -->
    android:layout_height="match_parent" 
  
    tools:context="com.example.hp.dial.MainActivity"> 
  
    <EditText
        android:id="@+id/editText"
        <!-- covers as much width as required. -->
        android:layout_width="wrap_content" 
  
        <!-- covers as much height as required. -->
        android:layout_height="wrap_content" 
  
        <!-- left spacing from the parent layout-->
        android:layout_marginLeft="8dp" 
  
        <!-- right spacing from the parent layout-->
        android:layout_marginRight="8dp" 
  
        <!-- top spacing from the parent layout-->
        android:layout_marginTop="65dp" 
  
        <!-- hint works as a place holder -->
        android:hint="Phone No." 
  
        <!-- Expressing the given input should be phone no -->
        android:inputType="phone" 
  
        app:layout_constraintHorizontal_bias="0.503" 
        app:layout_constraintLeft_toLeftOf="parent" 
        app:layout_constraintRight_toRightOf="parent" 
        app:layout_constraintTop_toTopOf="parent" /> 
  
    <Button
        android:id="@+id/button"
  
        <!-- covers as much width as required. -->
        android:layout_width="wrap_content" 
  
        <!-- covers as much height as required. -->
        android:layout_height="wrap_content" 
  
        android:layout_marginLeft="8dp" 
        android:layout_marginRight="8dp" 
        android:layout_marginTop="67dp" 
  
        <!-- name of function is Call, and it is -->
        <!-- invoked when the button is clicked.-->
        android:onClick="Call" 
  
        android:text="DIAL" 
  
        <!-- below are the positions of the button -->
        <!-- with respect to editText and parent layout. -->
        app:layout_constraintLeft_toLeftOf="parent" 
        app:layout_constraintRight_toRightOf="parent" 
        app:layout_constraintTop_toBottomOf="@+id/editText" 
    /> 
</android.support.constraint.ConstraintLayout>
`;



const Q3 = `
MAD - Practical - 03
--------------------

Here is the full Kotlin code for the authentication application:

1) LoginActivity.kt :

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import android.content.Intent
import android.util.Patterns

class LoginActivity : AppCompatActivity() {

    private lateinit var emailEditText: EditText
    private lateinit var passwordEditText: EditText
    private lateinit var loginButton: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        emailEditText = findViewById(R.id.emailEditText)
        passwordEditText = findViewById(R.id.passwordEditText)
        loginButton = findViewById(R.id.loginButton)

        loginButton.isEnabled = false

        emailEditText.setOnKeyListener { _, _, _ ->
            loginButton.isEnabled = isValidEmail(emailEditText.text.toString())
            false
        }

        loginButton.setOnClickListener {
            val email = emailEditText.text.toString()
            val password = passwordEditText.text.toString()

            if (authenticateUser(email, password)) {
                val welcomeActivityIntent = Intent(this, WelcomeActivity::class.java)
                welcomeActivityIntent.putExtra("email", email)
                startActivity(welcomeActivityIntent)
            } else {
                Toast.makeText(this, "Invalid email or password", Toast.LENGTH_SHORT).show()
            }
        }
    }

    private fun isValidEmail(email: String): Boolean {
        return Patterns.EMAIL_ADDRESS.matcher(email).matches()
    }

    private fun authenticateUser(email: String, password: String): Boolean {
        // Replace with your authentication logic
        return email == "user@example.com" && password == "password"
    }
}


2) WelcomeActivity.kt :

import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class WelcomeActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_welcome)

        val email = intent.getStringExtra("email")
        val welcomeTextView = findViewById<TextView>(R.id.welcomeTextView)

        welcomeTextView.text = "Welcome, $email!"
    }
}

`;

const Q5 = `
MAD - Practical - 05 :
------------------------

Here is the full Kotlin code for the application:

MainActivity.kt

import android.os.Bundle
import android.os.Handler
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private lateinit var textView: TextView
    private var count = 0
    private var handler = Handler()
    private var runnable: Runnable? = null
    private var isRunning = false

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        textView = findViewById(R.id.textView)

        startIncrementing()
    }

    private fun startIncrementing() {
        isRunning = true
        runnable = object : Runnable {
            override fun run() {
                count++
                textView.text = count.toString()
                handler.postDelayed(this, 1000) // increment every 1 second
            }
        }
        handler.post(runnable)
    }

    fun stopIncrementing(view: android.view.View) {
        isRunning = false
        handler.removeCallbacks(runnable)
    }
}


`;

const Q6 = `
MAD - Practical - 06
---------------------

Here is the full Kotlin code for the application:

1) MainActivity.kt

import android.os.Bundle
import android.os.Handler
import android.widget.Button
import android.widget.ProgressBar
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private lateinit var progressBar: ProgressBar
    private lateinit var progressTextView: TextView
    private lateinit var button: Button
    private var progress = 0
    private var handler = Handler()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        progressBar = findViewById(R.id.progressBar)
        progressTextView = findViewById(R.id.progressTextView)
        button = findViewById(R.id.button)

        button.setOnClickListener {
            startProgress()
        }
    }

    private fun startProgress() {
        progress = 0
        progressBar.progress = progress
        progressTextView.text = "$progress%"
        handler.postDelayed(object : Runnable {
            override fun run() {
                if (progress < 100) {
                    progress++
                    progressBar.progress = progress
                    progressTextView.text = "$progress%"
                    handler.postDelayed(this, 100) // increment every 100ms
                } else {
                    Toast.makeText(this@MainActivity, "Progress complete!", Toast.LENGTH_SHORT).show()
                }
            }
        }, 100)
    }
}


`;

const Q7 = `
MAD -> Practical - 7
---------------------

1) string.xml file :-
-------------------------

<resources>
    <string name="app_name">Services_In_Android</string>
    <string name="heading">Services In Android</string>
    <string name="startButtonText">Start the Service</string>
    <string name="stopButtonText">Stop the Service</string>
</resources>

2) activity_main.xml file :-
-----------------------------
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#168BC34A"
    tools:context=".MainActivity">

    <LinearLayout
        android:id="@+id/linearLayout"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_centerVertical="true"
        android:orientation="vertical"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="1.0"
        tools:ignore="MissingConstraints">

        <TextView
            android:id="@+id/textView1"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginBottom="170dp"
            android:fontFamily="@font/roboto"
            android:text="@string/heading"
            android:textAlignment="center"
            android:textAppearance="@style/TextAppearance.AppCompat.Large"
            android:textColor="@android:color/holo_green_dark"
            android:textSize="36sp"
            android:textStyle="bold" />

        <Button
            android:id="@+id/startButton"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:layout_marginStart="20dp"
            android:layout_marginTop="10dp"
            android:layout_marginEnd="20dp"
            android:layout_marginBottom="20dp"
            android:background="#4CAF50"
            android:fontFamily="@font/roboto"
            android:text="@string/startButtonText"
            android:textAlignment="center"
            android:textAppearance="@style/TextAppearance.AppCompat.Display1"
            android:textColor="#FFFFFF"
            android:textStyle="bold" />

        <Button
            android:id="@+id/stopButton"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:layout_marginStart="20dp"
            android:layout_marginTop="10dp"
            android:layout_marginEnd="20dp"
            android:layout_marginBottom="20dp"
            android:background="#4CAF50"
            android:fontFamily="@font/roboto"
            android:text="@string/stopButtonText"
            android:textAlignment="center"
            android:textAppearance="@style/TextAppearance.AppCompat.Display1"
            android:textColor="#FFFFFF"
            android:textStyle="bold" />

        <ImageView
            android:id="@+id/imageView"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="80dp"
            app:srcCompat="@drawable/banner" />
    </LinearLayout>

</androidx.constraintlayout.widget.ConstraintLayout>

3) create custom service class

import android.app.Service
import android.content.Intent
import android.media.MediaPlayer
import android.os.IBinder
import android.provider.Settings

class NewService : Service() {

    // declaring object of MediaPlayer
    private lateinit var player:MediaPlayer

    // execution of service will start
    // on calling this method
    override fun onStartCommand(intent: Intent, flags: Int, startId: Int): Int {

        // creating a media player which
        // will play the audio of Default
        // ringtone in android device
        player = MediaPlayer.create(this, Settings.System.DEFAULT_RINGTONE_URI)

        // providing the boolean
        // value as true to play
        // the audio on loop
        player.setLooping(true)

        // starting the process
        player.start()

        // returns the status
        // of the program
        return START_STICKY
    }

    // execution of the service will
    // stop on calling this method
    override fun onDestroy() {
        super.onDestroy()

        // stopping the process
        player.stop()
    }

    override fun onBind(intent: Intent): IBinder? {
        return null
    }
}

4) work with main activity file :-

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity(), View.OnClickListener {

    // declaring objects of Button class
    private var start: Button? = null
    private var stop: Button? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // assigning ID of startButton
        // to the object start
        start = findViewById<View>(R.id.startButton) as Button

        // assigning ID of stopButton
        // to the object stop
        stop = findViewById<View>(R.id.stopButton) as Button

        // declaring listeners for the
        // buttons to make them respond
        // correctly according to the process
        start!!.setOnClickListener(this)
        stop!!.setOnClickListener(this)
    }

    override fun onClick(view: View) {

        // process to be performed
        // if start button is clicked
        if (view === start) {

            // starting the service
            startService(Intent(this, NewService::class.java))
        }

        // process to be performed
        // if stop button is clicked
        else if (view === stop) {

            // stopping the service
            stopService(Intent(this, NewService::class.java))
        }
    }
}

5) AndroidManifest.xml file:-

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.services_in_android">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <meta-data
            android:name="preloaded_fonts"
            android:resource="@array/preloaded_fonts" />
      
        <!-- Mention the service name here -->
        <service android:name=".NewService"/>
      
    </application>

</manifest>

`;

const Q8 = `MAD - Practical - 08 :- Notification
-------------------------------------

Here is the full Kotlin code for the application:

1) PrimeNumberService.kt

import android.app.Service
import android.content.Intent
import android.os.IBinder
import android.util.Log

class PrimeNumberService : Service() {

    override fun onBind(intent: Intent): IBinder? {
        return null
    }

    override fun onStartCommand(intent: Intent, flags: Int, startId: Int): Int {
        val lowerBound = intent.getIntExtra("lower_bound", 0)
        val upperBound = intent.getIntExtra("upper_bound", 0)

        Thread {
            val primeNumbers = findPrimeNumbers(lowerBound, upperBound)
            sendNotification(primeNumbers)
        }.start()

        return super.onStartCommand(intent, flags, startId)
    }

    private fun findPrimeNumbers(lowerBound: Int, upperBound: Int): List<Int> {
        val primeNumbers = mutableListOf<Int>()
        for (i in lowerBound..upperBound) {
            if (isPrime(i)) {
                primeNumbers.add(i)
            }
        }
        return primeNumbers
    }

    private fun isPrime(n: Int): Boolean {
        if (n <= 1) {
            return false
        }
        for (i in 2..n / 2) {
            if (n % i == 0) {
                return false
            }
        }
        return true
    }

    private fun sendNotification(primeNumbers: List<Int>) {
        val notificationManager = getSystemService(NOTIFICATION_SERVICE) as NotificationManager
        val notification = NotificationCompat.Builder(this, "prime_numbers_channel")
            .setContentTitle("Prime Numbers Found")
            .setContentText("Prime numbers between range: $primeNumbers")
            .setSmallIcon(R.drawable.ic_notification)
            .build()
        notificationManager.notify(1, notification)
    }
}


2) MainActivity.kt

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        findViewById<Button>(R.id.findPrimeNumbersButton).setOnClickListener {
            val lowerBound = findViewById<EditText>(R.id.lowerBoundEditText).text.toString().toInt()
            val upperBound = findViewById<EditText>(R.id.upperBoundEditText).text.toString().toInt()

            val intent = Intent(this, PrimeNumberService::class.java)
            intent.putExtra("lower_bound", lowerBound)
            intent.putExtra("upper_bound", upperBound)
            startService(intent)
        }
    }
}
`;

const Q9 = `MAD - Practical - 09
----------------------

Here is the full Kotlin code for the application:

MainActivity.kt

import android.os.Bundle
import android.provider.ContactsContract
import android.widget.ListView
import androidx.appcompat.app.AppCompatActivity
import androidx.cursoradapter.widget.SimpleCursorAdapter

class MainActivity : AppCompatActivity() {

    private lateinit var listView: ListView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        listView = findViewById(R.id.listView)

        val cursor = contentResolver.query(
            ContactsContract.Contacts.CONTENT_URI,
            null,
            null,
            null,
            null
        )

        val adapter = SimpleCursorAdapter(
            this,
            android.R.layout.simple_list_item_2,
            cursor,
            arrayOf(
                ContactsContract.Contacts.DISPLAY_NAME,
                ContactsContract.Contacts.CONTACT_STATUS
            ),
            intArrayOf(android.R.id.text1, android.R.id.text2),
            0
        )

        listView.adapter = adapter
    }
}
`;

const Q10 = `
MAD - Practical - 10
---------------------

Here is the full Kotlin code for the application:

1) MainActivity.kt

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private lateinit var editText: EditText
    private lateinit var button: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        editText = findViewById(R.id.editText)
        button = findViewById(R.id.button)

        button.setOnClickListener {
            val number = editText.text.toString().toInt()
            val intent = Intent(this, ListActivity::class.java)
            intent.putExtra("number", number)
            startActivity(intent)
        }
    }
}


2) ListActivity.kt

import android.os.Bundle
import android.widget.ListView
import androidx.appcompat.app.AppCompatActivity

class ListActivity : AppCompatActivity() {

    private lateinit var listView: ListView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_list)

        listView = findViewById(R.id.listView)

        val number = intent.getIntExtra("number", 0)
        val list = mutableListOf<String>()
        for (i in 1..number) {
            list.add("Item $i")
        }

        val adapter = android.widget.ArrayAdapter(this, android.R.layout.simple_list_item_1, list)
        listView.adapter = adapter
    }
}

`;

const EVENT = `
/ Import events module 
var events = require('events'); 
// Create an eventEmitter object 
var eventEmitter = new events.EventEmitter(); 
 
// Create an event handler as follows 
var connectHandler = function connected() { 
  console.log('connection succesful.'); 
 
 // Fire the data_received event 
  eventEmitter.emit('data_received'); 
} 
 
// Bind the connection event with the handler 
eventEmitter.on('connection', connectHandler); 
// Bind the data_received event with the anonymous function 
eventEmitter.on('data_received', function(){ 
 console.log('data received succesfully.'); 
}); 
// Fire the connection event 
eventEmitter.emit('connection'); 
console.log("Program Ended."); 
`;
